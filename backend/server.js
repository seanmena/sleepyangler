const express = require("express");
const app = express();
const port = 5500;
const { auth } = require("express-openid-connect");
require("dotenv").config();
const { requiresAuth } = require("express-openid-connect");
const cors = require("cors");
const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
};

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo DB success");
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  console.log(req.oidc.isAuthenticated());
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.get("/admin", requiresAuth(), (req, res) =>
  res.send(`Hello ${req.oidc.user.name}, this is the admin section.`)
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
