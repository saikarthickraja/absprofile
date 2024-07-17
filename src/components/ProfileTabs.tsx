import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, IconButton, Tooltip, TextField, Grid, Button, Switch, Dialog, DialogTitle, DialogContent, DialogActions, colors } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const ProfileTabs = () => {
  const [value, setValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    dateOfBirth: '31/08/2000',
    gender: 'Male',
    maritalStatus: 'Single',
    bloodGroup: 'B+',
    contactNo: '+91 9629283945',
    qualification: 'Master of Computer Application',
  });
  const [darkMode, setDarkMode] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openVerifyPhoneNumber, setOpenVerifyPhoneNumber] = useState(false);
  const [openLogoutConfirmation, setOpenLogoutConfirmation] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false); 
    alert('Changes saved successfully!');
  };

  const handleCancelClick = () => {
    setEditMode(false); 
  };

  const handleInputChange = (event, key) => {
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  };

  const handleDarkModeChange = (event) => {
    const isChecked = event.target.checked;
    setDarkMode(isChecked);
    if (isChecked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const handleOpenChangePassword = () => {
    setOpenChangePassword(true);
  };

  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
  };

  const handleOpenVerifyPhoneNumber = () => {
    setOpenVerifyPhoneNumber(true);
  };

  const handleCloseVerifyPhoneNumber = () => {
    setOpenVerifyPhoneNumber(false);
  };

  const handleOpenLogoutConfirmation = () => {
    setOpenLogoutConfirmation(true);
  };

  const handleCloseLogoutConfirmation = () => {
    setOpenLogoutConfirmation(false);
  };

  const renderProfileDetails = () => {
    return (
      <>
        <Box mt={2}>
          {editMode ? (
            <>
              <Button variant="contained" onClick={handleSaveClick} startIcon={<SaveIcon />}>
                Save Changes
              </Button>
              <Button variant="outlined" onClick={handleCancelClick} style={{ marginLeft: '8px' }}>
                Cancel
              </Button>
            </>
          ) : (
            <IconButton onClick={handleEditClick}>
              <Tooltip title="Edit Details" aria-label="edit details">
                <EditIcon  style={{color:"blue"}} />
              </Tooltip>
            </IconButton>
          )}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: 'grey', fontWeight: '600' }}>Date of Birth:</span>{' '}
              {editMode ? (
                <TextField
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange(e, 'dateOfBirth')}
                  size="small"
                  fullWidth
                />
              ) : (
                <span style={{ color: 'black', fontWeight: '700' }}>{formData.dateOfBirth}</span>
              )}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: 'grey', fontWeight: '600' }}>Gender:</span>{' '}
              {editMode ? (
                <TextField
                  value={formData.gender}
                  onChange={(e) => handleInputChange(e, 'gender')}
                  size="small"
                  fullWidth
                />
              ) : (
                <span style={{ color: 'black', fontWeight: '700' }}>{formData.gender}</span>
              )}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: 'grey', fontWeight: '600' }}>Marital Status:</span>{' '}
              {editMode ? (
                <TextField
                  value={formData.maritalStatus}
                  onChange={(e) => handleInputChange(e, 'maritalStatus')}
                  size="small"
                  fullWidth
                />
              ) : (
                <span style={{ color: 'black', fontWeight: '700' }}>{formData.maritalStatus}</span>
              )}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: 'grey', fontWeight: '600' }}>Blood Group:</span>{' '}
              {editMode ? (
                <TextField
                  value={formData.bloodGroup}
                  onChange={(e) => handleInputChange(e, 'bloodGroup')}
                  size="small"
                  fullWidth
                />
              ) : (
                <span style={{ color: 'black', fontWeight: '700' }}>{formData.bloodGroup}</span>
              )}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: 'grey', fontWeight: '600' }}>Contact no:</span>{' '}
              {editMode ? (
                <TextField
                  value={formData.contactNo}
                  onChange={(e) => handleInputChange(e, 'contactNo')}
                  size="small"
                  fullWidth
                />
              ) : (
                <span style={{ color: 'black', fontWeight: '700' }}>{formData.contactNo}</span>
              )}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: 'grey', fontWeight: '600' }}>Qualification:</span>{' '}
              {editMode ? (
                <TextField
                  value={formData.qualification}
                  onChange={(e) => handleInputChange(e, 'qualification')}
                  size="small"
                  fullWidth
                />
              ) : (
                <span style={{ color: 'black', fontWeight: '700' }}>{formData.qualification}</span>
              )}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  const renderSettingsContent = () => {
    return (
      <>
        <Box mt={2} display="flex" alignItems="center">
          <Typography variant="body2" color="text.secondary" style={{ marginRight: '8px' }}>
            Dark Mode
          </Typography>
          <Switch checked={darkMode} onChange={handleDarkModeChange} color="primary" />
        </Box>
        <Box mt={2}>
          <Button variant="contained" style={{ marginRight: '8px', backgroundColor: 'green', color: 'white' }} onClick={handleOpenChangePassword}>
            Change password
          </Button>
          <Button variant="outlined" style={{ marginRight: '8px', backgroundColor: 'blue', color: 'white' }} onClick={handleOpenVerifyPhoneNumber}>
            Verify
          </Button>
          <Button variant="outlined" style={{ marginRight: '8px', backgroundColor: 'red', color: 'white' }} onClick={handleOpenLogoutConfirmation}>
            Logout
          </Button>
        </Box>

        <Dialog open={openChangePassword} onClose={handleCloseChangePassword}>
          <DialogTitle>Change Password</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="currentPassword"
              label="Current Password"
              type="password"
              fullWidth
            />
            <TextField
              margin="dense"
              id="newPassword"
              label="New Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseChangePassword} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseChangePassword} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openVerifyPhoneNumber} onClose={handleCloseVerifyPhoneNumber}>
          <DialogTitle>Verify Phone Number</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseVerifyPhoneNumber} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseVerifyPhoneNumber} color="primary">
              Verify
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openLogoutConfirmation} onClose={handleCloseLogoutConfirmation}>
          <DialogTitle>Logout</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Are you sure you want to logout?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogoutConfirmation} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseLogoutConfirmation} color="primary">
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
        <Tab label="Profile Details" />
        <Tab label="Settings" />
        <Tab label="Preferences" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {renderProfileDetails()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {renderSettingsContent()}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Preferences Content
      </TabPanel>
    </Box>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default ProfileTabs;
