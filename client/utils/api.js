"use strict";

import request from "superagent";

import config from "../config";

const endpoint = "/api/v1";

function createUser(username, password, handle) {
  return new Promise((resolve, reject) => {
    request.
      post(`${endpoint}/signup`).
      send({
        username,
        password,
        handle
      }).
      end(res => {
        if (res.ok) resolve(res.body);
        else reject(res.error);
      });
  });
}

const api = {

  login(email, password) {
    return new Promise((resolve, reject) => {
      request.
        post(`${endpoint}/login`).
        auth(email, password).
        end(res => {
          if (res.ok) resolve(res.body);
          else reject(res.error);
        });
    });
  },

  signup(email, password, handle) {
    return new Promise((resolve, reject) => {

      createUser(username, password, handle).
        then((user) => {
          return api.login(username, password);
        }).
        then(resolve).
        catch(reject);

    });
  },

  logout() {
  },

  getAuthedUser() {
    return new Promise((resolve, reject) => {
      reject(null);
    });
  }

};

module.exports = api;