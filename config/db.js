const mongoose = require("mongoose");

// * Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

module.exports = function () {
  // connection to MongoDB
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //   setTimeout(() => {
  //     db.close();
  //   }, 5000);

  //listen for error on connection
  db.on("error", (error) => console.error(error));
  //listen for open connection
  db.on("open", () => console.log("Connected to MongoDB"));
  //listen for close connection
  db.on("close", () => console.log("Mongo disconnected"));
};
