const vipcustomer = require("../controller/vipcustomer_controller");
var router = require("express").Router();
const schedule = require("../controller/schedule_controller");



//get all vipcustomer
router.get("/all", vipcustomer.GetVIPCustomersAllDetails_get);
router.post("/signup", vipcustomer.RegistryVIPCustomer_post);
router.post("/schedule/:nif",schedule.MakeScheduling_post);
router.get("/schedule/:nif",vipcustomer.GetCurrentScheduleFromCustomer_GET);
router.delete("/scheduleCancel",schedule.CancelScheduling_post);
router.get("/:id", vipcustomer.GetVipInfo_get);
//update
router.put("/update/:id",vipcustomer.UpdateVIPName_put);
module.exports = router;