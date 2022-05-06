const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send('you have successfully connected to our API! Welcome');
});

module.exports = router;