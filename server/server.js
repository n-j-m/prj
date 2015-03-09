"use strict";

require("babel/register");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const exphbrs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");

const config = require("./config");
const rootRouter = require("./routes/root_router");
const apiRouter = require("./routes/api_router");

const app = express();

// Init view engine
app.engine("handlebars", exphbrs({
  layoutsDir: path.join(__dirname, "views", "layouts"),
  defaultLayout: "index"
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Init app
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "humpidydumpidy"
}));

// Init passport
app.use(passport.initialize());
app.use(passport.session());

config.initPassport(passport);

// Static routes
app.use('/assets/img', express.static(path.resolve(__dirname + '/../dist/img/')));
app.use('/assets/js', express.static(path.resolve(__dirname + '/../dist/js')));
app.use('/static/js', express.static(path.resolve(__dirname + '/../dist/js')));
app.use('/assets/css', express.static(path.resolve(__dirname + '/../dist/css')));
app.use('/assets/fonts', express.static(path.resolve(__dirname + '/../dist/fonts')));

// Init api and root routers
app.use("/api", apiRouter);
app.use("/", rootRouter);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"));

console.log("listening on port", app.get("port"));