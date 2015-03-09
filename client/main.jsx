"use strict";

require("babel/register");

import React from "react";
import Router from "react-router";

import routes from "./routes";
import UserStore from "./stores/user_store";

const content = document.getElementById("content");
const context = JSON.parse(window.__CONTEXT__);
UserStore.rehydrate(context);
Router.run(routes, Router.HistoryLocation, (Handler) => {
  return React.render(<Handler />, content);
});
