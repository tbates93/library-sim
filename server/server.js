require('dotenv').config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require('passport-auth0');

const users_controller = require("./controllers/users_controller")

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then( db => {
    console.log("Connected to DB")
    app.set('db', db)

    //console.log(db)

    // {db: dbObject}
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        //db calls will be used here, and create users in our database

        const db = app.get('db')
        //console.log(db)

        db.users_find_user([profile.identities[0].user_id]).then(user =>{
            if (user[0]){
                return done(null, user[0].id)
            }
            else {
                db.users_create_user([profile._json.name, profile._json.email, profile._json.picture,profile._json.identities[0].user_id])
                .then( user => {
                    return done(null, user[0].id)
                })
            }
            console.log(user)
        })
    }
))

app.get("/auth", passport.authenticate('auth0'));
app.get("/auth/callback", passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}))

app.get('/auth/me', (req,res) => {
    if(!req.user){
        return res.status(200).send(false)
    }
    
    return res.status(200).send(req.user)
})

app.get('/auth/logout', (req,res)=> {
    req.logOut("https://tbates.auth0.com/v2/logout");
    res.redirect(302,process.env.LOGOUT_REDIRECT)
})

passport.serializeUser(function (id, done) {
    done(null, id)
})

//user represents whoever is logged in from the session

passport.deserializeUser(function (id, done) {
    app.get('db').users_find_current_user([id])
    .then(user => {
        done(null, user[0])
    })
    
})


// ENDPOINTS ****************************************************

app.get('/api/users/setuser/:user_id', users_controller.setUserOnRedux)



const PORT = 3005
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))