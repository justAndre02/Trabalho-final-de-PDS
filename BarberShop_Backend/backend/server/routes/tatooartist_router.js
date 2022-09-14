const tatooartist = require("../controller/tatooartist_controller");
var router = require("express").Router();

    


//get all tatooartist
router.get("/all", tatooartist.GetTatooArtistAllDetails_get);
router.post("/signup", tatooartist.RegisterTattooArtist_post);
router.get("/schedule/:id",tatooartist.GetCurrentScheduleFromTattooArtist_GET);
router.get("/:id", tatooartist.GetTatooArtistInfo_get)
//update
router.put("/update/:id",tatooartist.UpdateTatooArtist_put);
module.exports = router;