const plan = require("../controller/plan_controller");
var router = require("express").Router();
    


//get all plan
router.get("/all", plan.GetAllMonthlyPlan_get);

  
module.exports = router;