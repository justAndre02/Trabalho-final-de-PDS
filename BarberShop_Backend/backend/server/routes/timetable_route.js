const ShowTimeTable_get = require("../controller/timetable_controller").ShowTimeTable_get;
const router = require("express").Router();

router.get("/show/:id", ShowTimeTable_get);

module.exports = router;

