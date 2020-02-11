import React, { Component } from "react";
import SwitchCard from "./SwitchCard";
import SliderCard from "./SliderCard";
import SelectCard from "./SelectCard";
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
          justifyContent: "center",
          padding: "10px"
        }}
      >
        <SwitchCard />
        <SliderCard />
        <SelectCard />
      </div>
    );
  }
}

export default Dashboard;
