const barber = require("../controller/barber_controller.js");
var router = require("express").Router();


//get all barbers
router.get("/all", barber.GetBarberAllDetails_get);

//post do create barber
router.post("/signup", barber.RegisterBarber_post);

//post marcações
router.get("/schedule/:id",barber.GetCurrentScheduleFromBarber_GET);

router.get("/:id", barber.GetBarberInfo_get);

//update
router.put("/update/:id",barber.UpdateBarber_put);
  
module.exports = router;