const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const session = require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const User = require('../../backend/models/user');

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: "Can't hack me",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/JagranHub", { useNewUrlParser: true })

// const userSchema=new mongoose.Schema({
//     name:String,
//     userName:String,
//     password:String
// });

// userSchema.plugin(passportLocalMongoose);

// const User=new mongoose.model("User",userSchema);

// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// app.get("/", function (req, res) {
//     res.send("Hello");
// });

app.post("/register",function(req,res){
    res.send(req.body);
    console.log(req.body);
    alert("hi");
    // User.register({username:req.bo})
})

app.listen(3000/api, function () {
    console.log("Server started on port 3000.");
});
