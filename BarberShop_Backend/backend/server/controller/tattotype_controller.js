const TatooType = require("../db/tattotype");

exports.GetAllTattooType_get = async (req, res, next) => {
  try {
    await TatooType.GetAllTattooType((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Ocorreu algum erro para obter os dados das tatuagens"
        });
      else res.status(200).json(data);
    }); 
  } catch (error) {
    console.log(error);
    next(error);
  }
};