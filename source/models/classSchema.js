var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("clas", ClassSchema);
