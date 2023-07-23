const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const LocalStrategy = require('passport-local').Strategy;
const cookiesParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const multer = require('multer')
const path = require('path');
// const upload = multer({ dest: 'uploads/' })
const User = require("./models/user");
const Product = require("./models/product");
const product = require("./models/product");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/JagranHub", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
});
mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});

//Middleware
app.use(express.static(__dirname + "./public/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(session({
    secret: "Iamsecret",
    resave: true,
    saveUninitialized: true
}));

app.use(cookiesParser("Iamsecret"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

const Storage = multer.diskStorage({
    destination: "../my-app/public/uploads",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname));
    }
})
const upload = multer({
    storage: Storage
}).single("img");

//Routes

app.get("/user", function (req, res) {
    res.send(req.user);
});
app.post("/register", async (req, res) => {
    try {
        const result = await User.findOne({ username: req.body.username });
        if (result) {
            console.log("User already exist", result.name)
            res.status(409).json({ meassage: "User already exists" });
            // window.alert("User Already Exists");
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                name: req.body.name,
                password: hashedPassword
            });
            await newUser.save();
            // const redirectUrl = 'http://localhost:3000/';
            // res.json({ redirectUrl });
            console.log("User created:", newUser.username);
            res.status(201).json({ message: "User created successfully" });
            // window.alert("User Created");
        }
    } catch (error) {
        console.error("Error during user registration:", error);
        // res.status(500).send("Internal Server Error");
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.post("/login", (req, res, next) => {

    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.json({ message: "No User exists" });
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                const redirectUrl = 'http://localhost:3000/';
                res.json({ message: "Successfully Authenticated" });

                // window.alert("Successfully Authenticated");
                console.log(req.user);

            });
        }
    })
        (req, res, next);
});

app.post("/upload", upload,async (req, res) => {
    try {
        const imageFilePath = req.file.filename;
        const data = req.body;
        const newProd = new Product({
            owner: data.owner,
            contact: data.contact,
            address: data.address,
            pincode: data.pincode,
            category: data.category,
            model: data.model,
            price: data.price,
            description: data.description,
            // img: data.img
            imageFilePath:imageFilePath
        });
        await newProd.save();
        res.status(200).json({ message: 'Data uploaded successfully!' });
    } catch (error) {
        console.log('Error handling product upload: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
//Fetch data for React app
app.get('/api/products',async(req,res)=>{
    try{
        const products=await Product.find();
        res.json(products);
    } catch(error){
        console.log('Error in fetching products:',error);
        res.status(500).json({error:'Internal Server Error'});
    }
});


app.listen(4000, function () {
    console.log("Server started on port 4000.");
});