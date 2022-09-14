const Plan = require("../db/plan.js");

exports.GetAllMonthlyPlan_get = async (req, res,next) => {
  try {
    await Plan.GetAllMonthlyPlan((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Ocorreu algum erro para obter os dados dos planos"
        });
      else res.status(200).json(data);
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};