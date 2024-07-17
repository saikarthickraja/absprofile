import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const DetailsCard = () => {
  const [portalStatus, setPortalStatus] = useState("enable");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPortalStatus((event.target as HTMLInputElement).value);
  };

  return (
    <Card variant="elevation">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" component="div">
              <span style={{ color: "grey", fontWeight: "600" }}>
                Karthick Raja
              </span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "grey", fontWeight: "600" }}>email:</span>{" "}
              <span style={{ color: "black", fontWeight: "700" }}>
                saikarthick2019@gmail.com
              </span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "grey", fontWeight: "600" }}>
                employee status:
              </span>{" "}
              <span style={{ color: "black", fontWeight: "700" }}>Active</span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "grey", fontWeight: "600" }}>
                employee code:
              </span>{" "}
              <span style={{ color: "black", fontWeight: "700" }}>
                ABS10050
              </span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "grey", fontWeight: "600" }}>
                designation:
              </span>{" "}
              <span style={{ color: "black", fontWeight: "700" }}>
                Developer
              </span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "grey", fontWeight: "600" }}>
                location:
              </span>{" "}
              <span style={{ color: "black", fontWeight: "700" }}>Chennai</span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "grey", fontWeight: "600" }}>
                department:
              </span>{" "}
              <span style={{ color: "black", fontWeight: "700" }}>Web Dev</span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box mt={2}>
              <Typography variant="body2" color="text.secondary">
                <span style={{ color: "grey", fontWeight: "600" }}>
                  Portal Status:
                </span>
              </Typography>
              <RadioGroup value={portalStatus} onChange={handleChange}>
                <FormControlLabel
                  value="enable"
                  control={<Radio />}
                  label="Enable"
                />
                <FormControlLabel
                  value="disable"
                  control={<Radio />}
                  label="Disable"
                />
              </RadioGroup>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
