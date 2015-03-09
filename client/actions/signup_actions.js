"use strict";

import Reflux from "reflux";
import api from "../utils/api";

import wire from "../utils/wire";

const SignupActions = Reflux.createActions({
  "signup": { asyncResult: true }
});

SignupActions.signup.listenAndPromise(api.signup);
wire(SignupActions.signup);

export default SignupActions;