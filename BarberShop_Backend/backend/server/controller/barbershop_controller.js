const BarberShop = require("../db/barbershop.js");


exports.GeAllBarberShops_get = async (req, res, next) => {
  try {
    await BarberShop.GeAllBarberShops((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Ocorreu algum erro para obter as barbearias"
        });
      else res.status(200).json(data);
    }); 
  } catch (error) {
    console.log(error);
    next(error);
  }
};

 