const barbershop = require("../controller/barbershop_controller");
var router = require("express").Router();
    


//get all barbershop
router.get("/all", barbershop.GeAllBarberShops_get);

  
module.exports = router;