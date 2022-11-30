const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const bcrypt = require("bcrypt");
const UserDao = require("../models/daos/Users.dao");
const { formatUserForDB } = require("../utils/users.utils");
const envConfig = require("../env.config");

const User = new UserDao();

const salt = () => bcrypt.genSaltSync(10);
const createHash = (password) => bcrypt.hashSync(password, salt());
const isValidPassword = (user, password) =>
  bcrypt.compareSync(password, user.password);
// Passport  Local Strategy

//Sing up
passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const userItem = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          birthdate: req.body.birthdate,
          email: username,
          password: createHash(password),
        };
        console.log(userItem);
        const newUser = formatUserForDB(userItem);
        const user = await User.createUser(newUser);
        console.log("User registration successful");
        return done(null, user);
      } catch (error) {
        console.log("Error singing user up...");
        return done(error);
      }
    }
  )
);

// Sign in

passport.use(
  "signin",
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.getByEmail(username);
      if (!isValidPassword(user, password)) {
        console.log("Invalid User or Password");
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      console.log("Error signing in...");
      return done(error);
    }
  })
);

// passport Twitter Strategy

passport.use(
  new TwitterStrategy(
    {
      consumerKey: envConfig.TWITTER_API_KEY,
      consumerSecret: envConfig.TWITTER_API_SECRET,
      consumerURL: "http://localhost:8080/api/auth/twitter/callback",
    },
    async (token, tokenSecret, profile, done) => {
      console.log(JSON.stringify(profile, null, 2));
      try {
        const twitterUser = await User.getByTwitterId(profile.id);
        if (!twitterUser) {
          const userItem = {
            firstname: profile.displayName.split(" ")[0],
            lastname: profile.displayName.split(" ")[1],
            email: `${profile.username}@gmail.com`,
            twitterId: profile.id,
          };
          const newUser = formatUserForDB(userItem);
          const user = await User.createUser(newUser);
          console.log(" User sing up successful");
          return done(null, user);
        }
        return done(null, twitterUser);
      } catch (error) {
        console.log("Error signing in from twitter");
        console.log(error);
        return done(error);
      }
    }
  )
);

//serialization
passport.serializeUser((user, done) => {
  console.log("Inside serializer");
  done(null, user._id);
});

//deserialization

passport.deserializeUser(async (id, done) => {
  console.log("Inside DEserializer");
  const user = await User.getById(id);
  done(null, user);
});

module.exports = passport;
