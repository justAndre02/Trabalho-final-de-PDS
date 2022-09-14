var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var cookieParser = require("cookie-parser");

const apiRouter = require('./routes/index.js');
const barber_router = require('./routes/barber_route.js');
const tatooartist_router = require('./routes/tatooartist_router');
const customer_router = require('./routes/customer_router');
const vipcustomer_router = require('./routes/vipcoustomer_router');
const login_router = require('./routes/login_router.js');
const plan_router = require("./routes/plan_router");
const cuttype_router = require("./routes/cuttype_router");
const tatootype_router = require("./routes/tatootype_router");
const servicetype_router = require("./routes/servicetype_router");
const barbershop_router = require("./routes/barbershop_router");
const timetable_router = require("./routes/timetable_route");


const app = express();
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
path.basename(__dirname);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: oneDay }
}));
app.use(cors());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//serving public file
app.use(express.static(path.join(__dirname,"public")));

// cookie parser middleware
app.use(cookieParser());

app.use("/",apiRouter);
app.use("/barber",barber_router);
app.use("/tatooartist",tatooartist_router);
app.use("/customer",customer_router);
app.use("/vipcustomer",vipcustomer_router);
app.use("/login",login_router);
app.use("/timetable",timetable_router);
app.use("/plan",plan_router);
app.use("/servicetype",servicetype_router);
app.use("/cuttype",cuttype_router);
app.use("/tatootype",tatootype_router);
app.use("/barbershop",barbershop_router);

if (process.env.NODE_ENV == 'test') {
  app.listen(process.env.PORT || '0');
}
else{
  app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
    console.log(`Server is running on url: http://localhost:${process.env.PORT || '3000'}`);
  });
}

module.exports = app;
