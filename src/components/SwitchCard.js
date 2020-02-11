import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Switch
} from "@material-ui/core";

export default function SwitchCard() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Card style={{ width: "275px", height: "200px" }} variant="outlined">
      <CardContent>
        <Typography variant="h6">Online Mode</Typography>
        <Typography variant="body1">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          checked={state.checkedA}
          onChange={handleChange("checkedA")}
          value="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </CardActions>
    </Card>
  );
}
