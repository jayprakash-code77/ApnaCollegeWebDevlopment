const express =  require("express");
const router = express.Router();


router.post("/", (req, res) => {
    res.send("POST for post");
})

router.get("/", (req, res) => {
    res.send("GET for post");
})

router.get("/:id", (req, res) => {
    res.send("GET for post with ID");
})

router.put("/", (req, res) => {
    res.send("PUT for post");
})

router.delete("/", (req, res) => {
    res.send("DELETE for post");
})

module.exports = router;