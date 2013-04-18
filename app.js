
/**
 * Module dependencies.
 */

var express = require("express")
    , routes = require("./routes")
    , userController = require("./routes/user")
    , redis = require("redis")
    , http = require("http")
    , path = require("path")
    , mongoose = require("mongoose")
    , mongoURL;

var app = express();

app.configure(function(){
    app.set("port", process.env.PORT || 3000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "ejs");
    app.use(express.favicon());
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(require("less-middleware")({ src: __dirname + "/public" }));
    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.cookieParser());
    app.use(express.session({"secret": "oz"}));
    app.use(app.router);

    mongoURL = "mongodb://localhost/test";
});

app.configure("development", function(){
    app.use(express.errorHandler());
});

app.configure("production", function() {
    mongoURL = "mongodb://emily:isawesome@dharma.mongohq.com:10038/testDB";
});

console.log(mongoURL);
mongoose.connect(mongoURL);

// sets index
app.get("/", routes.index);
// lists users
app.get("/users", userController.list);

// setting up heart, courage, brain forms
app.get("/heart", userController.heartForm);
app.get("/courage", userController.courageForm);
app.get("/brains", userController.brainForm);

// setting up leisure, events, gallery, contact forms
app.get("/leisure", userController.leisure);
app.get("/gallery", userController.gallery);
app.get("/events", userController.events);
app.get("/contact", userController.contact);

// heart, courage, brain games
app.get("/heart-game", userController.heartGame);
app.get("/courage-game", userController.courageGame);
app.get("/brain-game", userController.brainGame);
// submitting heart, courage, brain forms
app.post("/submitBrainData", userController.submitBrainData);
app.post("/submitHeartData", userController.submitHeartData);

// finished the game -- from client, to server
app.post("/finishedBrainGame", userController.brainWinSubmit);
app.post("/finishedHeartGame", userController.heartWinSubmit);

// new user form
app.get("/users/new", userController.newUserForm);
app.post("/users/new", userController.newUser);

// showing the user
app.get("/users/:userId", userController.showUser);
// updating the user
app.get("/users/:userId/update", userController.updateUserForm);
app.put("/users/:userId", userController.updateUser);

// deleting the user
app.delete("/users/:userId", userController.deleteUser);


http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"));
});
