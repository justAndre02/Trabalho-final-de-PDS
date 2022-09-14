const customer = require("../controller/customer_controller");
var router = require("express").Router();
const schedule = require("../controller/schedule_controller");



//get all customers
router.get("/all", customer.GetCustomers_get);
//post do create customer
router.post("/signup", customer.RegisterCustomer_post);
    
router.get("/schedule/:nif",customer.GetCurrentScheduleFromCustomer_GET);
router.post("/schedule/:nif",schedule.MakeScheduling_post);
router.delete("/scheduleCancel",schedule.CancelScheduling_post);
router.get("/:nif", customer.GetCustomerInfo_get);


module.exports = router;