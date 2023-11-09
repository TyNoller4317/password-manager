const mongoose = require("mongoose");

const passwordSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  destination: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Password", passwordSchema);
