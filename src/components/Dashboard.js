import React, { Component } from "react";
import SwitchCard from "./SwitchCard";
import SliderCard from "./SliderCard";
import SelectCard from "./SelectCard";
import Greetings from "./Greetings";
import { Card, CardContent, Typography } from "@material-ui/core";

class Dashboard extends Component {
  state = {
    notifications: []
  };

  render() {
    return (
      <div>
        <Greetings />
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
