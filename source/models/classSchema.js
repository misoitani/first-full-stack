var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var classSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
       required: true
    }
});


module.exports = mongoose.model("Class", classSchema);