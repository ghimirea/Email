const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken--->", accessToken);
      console.log("refreshToken-->", refreshToken);
      console.log("profile --->", profile);
    }
  )
);

app.get("/", (req, res) => {
  res.send({ hi: "Render" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log("Listening to port 5000");
});
