import React, { Component } from "react";
import SwitchCard from "./SwitchCard";
import SliderCard from "./SliderCard";
import SelectCard from "./SelectCard";
import { Card, CardContent, Typography } from "@material-ui/core";

class Dashboard extends Component {
  state = {
    notifications: ["hi"]
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", fontSize: "38px", color: "gray" }}>
          Welcome User!
        </h1>
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
        <h2
          style={{ textAlign: "left", fontSize: "30px", paddingLeft: "40px" }}
        >
          System Notifications:
        </h2>
        {this.state.notifications.map(notification => {
          return (
            <p style={{ fontSize: "25px", color: "red", textAlign: "center" }}>
              {notification}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
