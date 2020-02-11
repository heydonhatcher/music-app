import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import Dashboard from "./Dashboard";

class Login extends Component {
  state = {
    user: "",
    pass: "",
    loggedIn: false
  };

  handleChange = e => {
    const copy = { ...this.state };
    copy[e.target.id] = e.target.value;
    this.setState(copy);
  };

  submit = e => {
    e.preventDefault();
    if (this.state.pass === "password") {
      this.setState({ loggedIn: true });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />;
    } else {
      return (
        <div
          style={{
            display: "block",
            height: "100%",
            width: "100%"
          }}
        >
          <form
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              flexDirection: "column",
              width: "350px",
              alignContent: "center",
              paddingTop: "100px"
            }}
            onSubmit={this.submit}
          >
            <TextField
              id="user"
              required
              label="User Name"
              size="normal"
              value={this.state.user}
              onChange={this.handleChange}
            />
            <TextField
              id="pass"
              required
              label="Password"
              size="normal"
              type="password"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            <Button variant="contained" color="primary" type="Submit">
              Login
            </Button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
