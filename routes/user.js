
/*
 * GET users listing.
 */

var UserModel = require("../models/User")
  , redis = require("redis")
  , url = require('url')
  , redisLocation = process.env.REDISCLOUD_URL || "redis://localhost:6379"
  , redisURL = url.parse(redisLocation)
  , redisClient = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});

exports.list = function(req, res){
    UserModel.getAllUsers(function(error, userList) {
        if (error) {
            res.send(error);
        }
        else {
            res.render("allUserView", {
                users: userList
            });
        }
    });
};

exports.showUser = function(req, res){
    UserModel.getUser(req.params.userId, function(error, user) {
        if (error) {
            res.send(error);
        }
        else {
            res.render("userView", {
                user: user
            });
        }
    });
};

exports.newUserForm = function(req, res) {
    res.render("userForm", {
        message: ""
    });
};

exports.newUser = function(req, res){
    UserModel.createUser(req.body, function(error, user) {
        if (error) {
            res.send(error);
        }
        else {
            res.redirect("/users/");
        }
    });
};

exports.updateUserForm = function(req, res){
    UserModel.getUser(req.params.userId, function(error, user) {
        if (error) {
            res.send(error);
        }
        else {
            res.render("userUpdate", {
                message: "",
                user: user
            });
        }
    });
};

exports.updateUser = function(req, res){
    UserModel.getUser(req.params.userId, function(error, user) {
        if (error) {
            res.send(error);
        }
        else {
            user.update(req.body, function(error) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.redirect("/users/");
                }
            });
        }
    });
}

exports.deleteUser = function(req, res){
    UserModel.getUser(req.params.userId, function(error, user) {
        if (error) {
            res.send(error);
        }
        else {
            user.destroy(function(error) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.redirect("/users/");
                }
            });
        }
    });
};

// forms
exports.heartForm = function(req, res){
    res.render("heartForm");
};
exports.courageForm = function(req, res){
    res.render("courageForm");
};
exports.brainForm = function(req, res){
    res.render("brainForm");
};
exports.leisure = function(req, res){
    res.render("leisure");
};
exports.gallery = function(req, res){
    res.render("gallery");
};
exports.events = function(req, res){
    res.render("events");
};
exports.contact = function(req, res){
    res.render("contact");
};

// games
exports.heartGame = function(req, res){
    res.render("heartGame");
};
exports.courageGame = function(req, res){
    res.render("courageGame");
};
exports.brainGame = function(req, res){
    res.render("brainGame");
};

// submit data
exports.submitBrainData = function(req, res){
    console.log(req.session);
    req.session.userId = req.body.userId;
    redisClient.set(req.body.userId, JSON.stringify(req.body), function(error) {
        if (error) {
            console.log("Error: " + error);
            res.send(error);
        }
        else {
            res.redirect("/brain-game");
        }
    });
};

exports.brainWinSubmit = function(req, res){
    redisClient.get(req.session.userId, function(error, value) {
        UserModel.createOrUpdate(JSON.parse(value), function(error, user) {
            if (error) {
                res.send(error);
            }
            else {
                res.redirect("/brains");
            }
        });
    });
}

exports.submitHeartData = function(req, res){
    console.log(req.session);
    req.session.userId = req.body.userId;
    redisClient.set(req.body.userId, JSON.stringify(req.body), function(error) {
        if (error) {
            res.send(error);
        }
        else {
            res.redirect("/heart-game");
        }
    });
};

exports.heartWinSubmit = function(req, res){
    redisClient.get(req.session.userId, function(error, value) {
        UserModel.createOrUpdate(JSON.parse(value), function(error, user) {
            if (error) {
                res.send(error);
            }
            else {
                res.redirect("/heart");
            }
        });
    });
}