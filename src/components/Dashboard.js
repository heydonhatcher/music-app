import React from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";

const Dashboard = () => {
  return (
    // <div>
    //   <Typography variant="h4" style={{ color: "gray" }}>
    //     Welcome User!
    //   </Typography>
    // </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Card style={{ width: "275px", height: "200px" }} variant="outlined">
        <CardContent>
          <Typography variant="h6">Online Mode</Typography>
          <Typography variant="body1">
            Is this application connected to the internet?
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ width: "275px", height: "200px" }} variant="outlined">
        <CardContent>
          <Typography variant="h6">Master Volume</Typography>
          <Typography variant="body1">
            Overrides all other sound settings in this application
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ width: "275px", height: "200px" }} variant="outlined">
        <CardContent>
          <Typography variant="h6">Sound Quality</Typography>
          <Typography variant="body1">
            Manually control the music quality in event of poor connection
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
