const GooglePlusTokenStrategy = require('passport-google-plus-token')
const passport = require('passport')

// Google OAuth Strategy

passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: '*1394598944-gipv3vi3v743bcs83an7tk3prdicln78.apps.googleusercontent.com',
    clientSecret: '-YT3R32F6OIFChU-n0lwiOia'
}, async (accessToken, refreshToken, profile, done) => {
    // print profile, you will get necessary information here
    return done(null, profile)
}));