const ServiceType = require("../db/servicetype");

exports.GetAllServiceType_get = async (req, res,next) => {
  try {
    await ServiceType.GetAllServiceType((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Ocorreu algum erro para obter os dados dos tipos de serviço"
        });
      else res.status(200).json(data);
    }); 
  } catch (error) {
    console.log(error);
    next(error);
  }
};