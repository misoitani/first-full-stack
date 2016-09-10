var express = require("express");
var classRoutes = express.Router();
var Clas = require("../models/classSchema");

classRoutes.route("/")
    .get(function (req, res) {
        Clas.find(function (err, classes) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(classes);
            }
        });
    })
    .post(function(req, res) {
        var newClass = new Clas(req.body);
        newClass.save(function(err, newClassObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newClassObj);
            }
        });
    });

classRoutes.route("/:id")
    .get(function(req, res) {
        Clas.findById(req.params.id, function(err, classObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(classObj);
            }
        });
    })
    .put(function(req, res) {
        Clas.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedClass) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(updatedClass);
            }
        })
    })
    .delete(function(req, res) {
        Clas.findByIdAndRemove(req.params.id, function(err, deletedClass) {
            if (err) {
                res.status(500).send(err);
            } else {
                var responseObj = {
                    success: true,
                    message: "Successfully deleted the class",
                    class: deletedClass
                };
                res.send(responseObj);
            }
        });
    });

module.exports = classRoutes;
