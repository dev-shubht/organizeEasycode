const router = require("express").Router();

router.get("/getallvideos", (req, res) => {
  console.log("request at video router");
  res.send("hey there");
});


router.get("/add", (req, res) => {
    console.log("add request at video router");
    res.send("hey there");
  });
  

module.exports = router;