import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Switch
} from "@material-ui/core";

const SwitchCard = props => {
  const onlineMode = props.onlineMode;
  const handleOnlineSwitchChange = props.handleOnlineSwitchChange;

  return (
    <Card
      style={{ width: "300px", height: "200px", margin: "10px" }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6">Online Mode</Typography>
        <Typography variant="body1">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          checked={onlineMode}
          onChange={handleOnlineSwitchChange}
          value="online"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </CardActions>
    </Card>
  );
};

export default SwitchCard;
