const CutType = require("../db/cuttype.js");

exports.GetAllCutType_get = async (req, res, next) => {
  try {
    await CutType.GetAllCutType((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Ocorreu algum erro para obter os dados dos cortes"
        });
      else res.status(200).json(data);
    });  
  } catch (error) {
    console.log(error);
    next(error); 
  }
};