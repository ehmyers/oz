
/*
 * GET users listing.
 */

<<<<<<< HEAD
 var UserModel = require("../models/User");

exports.list = function(req, res){
  res.send("respond with a resource");
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
            res.render("userForm", {
                message:"you successfully created a new user! yes good."
            });
        }
    });
=======
exports.list = function(req, res){
  res.send("respond with a resource");
>>>>>>> implement user list and update user
};