"use strict";

import React from "react";
import Router from "react-router";

import routes from "../../client/routes";
import UserStore from "../../client/stores/user_store";

function rootRouter(req, res) {
  let router = Router.create({
    routes: routes,
    location: req.url,
    onAbort: function(redirect) {
      // If redirect does not exist, render the login route
      const loc = redirect && redirect.to ? redirect.to : "/login";
      res.writeHead(303, {"Location": loc});
      return res.send();
    },
    onError: function(err) {
      console.log("Routing error");
      console.log(err);
    }
  });

  router.run((Handler) => {
    let context = req.user ? JSON.stringify(req.user) : "null";
    UserStore.rehydrate(context);
    console.log("Handler:", Handler.name);
    let content = React.renderToString(<Handler />);
    return res.render("main", {content, context});
  });
};

export default rootRouter;