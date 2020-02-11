import React, { Component } from "react";
import SwitchCard from "./SwitchCard";
import SliderCard from "./SliderCard";
import SelectCard from "./SelectCard";
import Greetings from "./Greetings";
import SystemNotifications from "./SystemNotifications";
import {
  APPLICATION_OFFLINE,
  HIGH_VOLUME,
  MUSIC_QUALITY_DEGRADED
} from "../NotificationConstants";
import { Card, CardContent, Typography } from "@material-ui/core";

class Dashboard extends Component {
  state = {
    notifications: [],
    onlineMode: true,
    volume: 0
  };

  handleOnlineSwitchChange = event => {
    const onlineMode = event.target.checked;
    let notifications = this.state.notifications;
    if (onlineMode) {
      notifications = notifications.filter((value, index, array) => {
        return value != APPLICATION_OFFLINE;
      });
    } else {
      notifications.push(APPLICATION_OFFLINE);
    }
    this.setState({
      onlineMode: event.target.checked,
      notifications: notifications
    });
  };

  handleVolumeChange = (event, value) => {
    let notifications = this.state.notifications;
    notifications = notifications.filter((value, index, array) => {
      return value != HIGH_VOLUME;
    });
    if (value >= 80) {
      notifications.push(HIGH_VOLUME);
    }
    this.setState({ volume: value, notifications: notifications });
  };

  render() {
    const notifications = this.state.notifications;

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
          <SwitchCard
            onlineMode={this.state.onlineMode}
            handleOnlineSwitchChange={this.handleOnlineSwitchChange}
          />
          <SliderCard
            onChange={this.handleVolumeChange}
            value={this.state.volume}
          />
          <SelectCard />
        </div>
        <SystemNotifications notifications={notifications} />
      </div>
    );
  }
}

export default Dashboard;
