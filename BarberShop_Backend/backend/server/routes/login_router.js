var router = require("express").Router();
const Login = require("../controller/login_controller");


    
router.post("/barber",Login.GetLoginBarber_POST);
router.post("/tattoartist",Login.GetLoginTattooArtist_POST);
router.post("/vip",Login.GetLoginVIP_POST);
router.post("/common",Login.GetLoginNormalCustomer_POST);


    
module.exports = router;
