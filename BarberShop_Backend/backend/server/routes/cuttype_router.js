const cuttype = require("../controller/cuttype_controller");
var router = require("express").Router();
    


//get all cuttype
router.get("/all", cuttype.GetAllCutType_get);

  
module.exports = router;