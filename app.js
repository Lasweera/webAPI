const express = require("express");
const mongoose = require("mongoose");
const comment = require("./routes/comments");
const cors = require("cors");
// const home = require("./routes/home");
// const users = require("./routes/users");
// const auth = require("./routes/auth");
// const logger = require("./middleware/logger");
// const authenticator = require("./middleware/authenticator");
const app = express(); // created an express application

app.use(express.json()); // parse json objects ; telling app to use inbuilt middleware
app.use(cors());
// app.use(logger); // telling app to use the custom middleware logger
// app.use(authenticator);
// app.use("/api/auth", auth);
// app.use("/api/users", users);
// app.use("/", home);
app.use("/api/comments", comment);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Listening on Port" + PORT);
});

mongoose
  .connect(
    "mongodb+srv://lasweera:*mongolasi97@cluster0.v8fbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to db successfully ....");
  })
  .catch((err) => console.log(err));