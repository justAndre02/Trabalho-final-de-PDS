const servicetype = require("../controller/servicetype_controller");
var router = require("express").Router();
    


//get all servicetype
router.get("/all", servicetype.GetAllServiceType_get);

  
module.exports = router;