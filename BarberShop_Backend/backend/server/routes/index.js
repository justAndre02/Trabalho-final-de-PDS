var router = require("express").Router();
    
router.get("/", (req, res) => {
  req.session.destroy();
  res.status(200).json({message:"ok"});
});

router.get('/logout',(req,res) => {
  req.session.destroy();
  res.status(200).json({message:"ok"});
  console.log("ok");
});

module.exports = router;