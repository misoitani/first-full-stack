var express = require("express");
var mongoose = require("mongoose");
var Class = require("../models/classSchema");

var classRoute = express.Router();



classRoute.route("/")
    .get(function (req, res) {
        Class.find(function (err, class) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(class);
            }
        });

    })
    .post(function (req, res) {
        var newClass = new Class(req.body);
        newClass.save(function (err, savedClass) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(savedClass);
            }
        });
    });

classRoute.route("/:id")
    .get(function (req, res) {
        Class.findById(req.params.id, function (err, classObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(classObj);
            }
        });
    })
    .put(function (req, res) {
        Class.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, updatedclass) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(updatedclass);
            }
        });
    })
    .delete(function (req, res) {
        //var classID = req.params.id;
        Votes.findOneAndRemove(req.params.id, function (err, deletedClass) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(deletedClass);
            }
        });
    });

module.exports = classRoute;