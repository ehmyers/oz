
/*
 * GET users listing.
 */

var UserModel = require("../models/User");

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