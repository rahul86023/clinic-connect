// passport.js

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "336732893105-q8jfgcrr7r3psf8n0h9gfm5baq4j4oig.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/api/v1/auth/google-login/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // Find or create a user based on the Google email
        let user = await User.findOne({ username: profile.emails[0].value });

        if (!user) {
          // If the user does not exist, create a new user
          user = await User.create({
            name: profile.displayName,
            username: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
          });
        }

        // Create a JWT token for the user
        const token = jwt.sign({ sub: user._id }, "my_secret", {
          expiresIn: "1d",
        });

        // Attach the token to the user object
        user.token = token;

        return done(null, user);
      } catch (error) {
        console.error("Error in Google strategy-passport:", error);
        return done(error);
      }
    }
  )
);

module.exports = passport;

// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// const crypto = require("crypto");
// const User = require("../models/user");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID:
//         "336732893105-q8jfgcrr7r3psf8n0h9gfm5baq4j4oig.apps.googleusercontent.com",
//       clientSecret: "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",
//       callbackURL: "http://localhost:5000/api/v1/auth/google-login/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       // Find a user by Google email
//       User.findOne({ username: profile.emails[0].value }, function (err, user) {
//         if (err) {
//           console.log("error in google strategy-passport", err);
//           return done(err);
//         }

//         if (user) {
//           // If found, set this user as req.user
//           return done(null, user);
//         } else {
//           // If not found, create the user and set it as req.user
//           User.create(
//             {
//               name: profile.displayName,
//               username: profile.emails[0].value,
//               password: crypto.randomBytes(20).toString("hex"),
//             },
//             function (err, newUser) {
//               if (err) {
//                 console.log(
//                   "error in creating user google strategy-passport",
//                   err
//                 );
//                 return done(err);
//               }

//               return done(null, newUser);
//             }
//           );
//         }
//       });
//     }
//   )
// );

// module.exports = passport;
