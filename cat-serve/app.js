const express = require("express");
const mongoose = require("mongoose");
const cats = require("./routes/cats");
const cors = require("cors");
const home = require("./routes/home");
//const logger = require("./middleware/logger");
//const authenticator = require("./middleware/authenticator");
const app = express();

app.use(cors());
app.use(express.json());
//app.use(logger);
//app.use(authenticator);
app.use("/api/cats", cats);
app.use("/", home);

app.listen(5000, () => {
    console.log(" listning on port 5000");
});

mongoose
    .connect("mongodb://localhost/catdb", { useNewUrlParser: true })
    .then(() => {
        console.log("connected to db successfully....");
    })
    .catch((err) => console.log(err));







