const express = require("express");
const Cat = require("../models/cat");
const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
    try {
        let cats = await Cat.find().sort({ name: "asc" });
        return res.send(cats);
    } catch (ex) {
        return res.status(500).send("Error: " + ex.message);
    }
});

//GET WITH Params
router.get("/:catId", async (req, res) => {

    let cat = await Cat.findById(req.params.catId);
    if (!cat) {
        return res.status(404).send("The given ID does not exist on our system");
    }
    res.status(200).send(cat);

});

router.post("/", async (req, res) => {
    if (!req.body.catName) {
        return res.status(400).send("Not all mandatory values are sent");
    }
    try {
        let cat = new Cat({
            name: req.body.catName,
            gender: req.body.gender,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            likeCount: req.body.likeCount,
            //unlikeCount: req.body.unlikeCount,
            deceased: req.body.deceased,

        });

        cat = await cat.save();
        return res.send(cat);
    } catch (ex) {
        return res.status(500).send("Error: " + ex.message);
    }

});


router.put("/:catId", async (req, res) => {
    let cat = await Cat.findById(req.params.catId);
    if (!cat) {
        return res.status(404).send("The given ID does not exist on our system");
    }

    // Validation
    if (!req.body.likeCount) {
        return res.status(400).send("Not all mandatory valuse are sent");
    }
    if (!req.body.unlikeCount) {
        return res.status(400).send("Not all mandatory valuse are sent");
    }

    cat.set({ likeCount: req.body.likeCount })
    //cat.set({ unlikeCount: req.body.unlikeCount })
    cat = await cat.save();
    res.send(cat);
});

router.delete("/:catId", async (req, res) => {
    let cat = await Cat.findOneAndDelete({ _id: req.params.catId })
    if (!cat) {
        return res.status(404).send("The given ID does not exist on our system");
    }


    res.send(cat);

});

module.exports = router;
