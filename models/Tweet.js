const mongoose = require("mongoose");

//create the schema (condition)
const tweetSchema = new mongoose.Schema(
  {
    title: String,
    body: {
      type: String,
      minLength: 1,
      maxLength: 255,
    },
    author: String,
    category: {
      type: String,
      enum: ["Programming", "Gamimg", "Arts"],
    },
    likes: {
      type: Number,
      default: 0,
    },
    sponsored: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// ! create the model
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
