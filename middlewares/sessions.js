const session = require('express-session');
console.log(process.env.EXPRESS_SESSION_SECRET_KEY)

module.exports = session({
  key: 'user_sid',
  secret: '132198jkand9137u1indiadaadas1131d3131',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
});

