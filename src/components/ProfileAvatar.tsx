import { useState } from "react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ProfileAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState("/placeholder-avatar.png");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
      <Box position="relative">
        <Avatar
          alt="User Avatar"
          src={avatarUrl}
          sx={{ width: 100, height: 100, border: "5px solid green" }}
        />
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <label htmlFor="avatar-upload">
          <Tooltip title="Edit Avatar" aria-label="edit avatar">
            <IconButton
              component="span"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                },
              }}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        </label>
      </Box>
    </Box>
  );
};

export default ProfileAvatar;
