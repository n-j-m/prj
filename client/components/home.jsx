"use strict";

import React from "react";
import AuthMixin from "../utils/auth_mixin";

const Home = React.createClass({
  mixins: [AuthMixin],

  displayName: "Home",

  render() {
    const handle = this.props.user ? this.props.user.handle : "";
    return (
      <div>
        <h1>Home</h1>
        <h2>Welcome, @{handle}</h2>
      </div>
    );
  }
});

export default Home;
