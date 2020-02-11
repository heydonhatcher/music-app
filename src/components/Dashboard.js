import React, { Component } from "react";
import SwitchCard from "./SwitchCard";
import SliderCard from "./SliderCard";
import { Card, CardContent, Typography } from "@material-ui/core";

class Dashboard extends Component {
  render() {
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
        <SwitchCard />
        <SliderCard />
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
  }
}

export default Dashboard;
