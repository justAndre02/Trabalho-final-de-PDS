const tattotype = require("../controller/tattotype_controller");
var router = require("express").Router();
    


//get all tatootype
router.get("/all", tattotype.GetAllTattooType_get);

  
module.exports = router;