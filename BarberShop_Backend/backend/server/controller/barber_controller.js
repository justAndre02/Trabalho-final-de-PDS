const Barber = require("../db/barber.js");
/**
 * Encarregue de registar um barbeiro
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.RegisterBarber_post = async (req, res,next) => {
  try {
    // Validar request
    if (!req.body)
      res.status(400).json({message: "Conteudo nao pode estar vazio!"});

    // verificar se os campos foram preeenchidos
    if((req.body.name === "") || (req.body.phone === "") || (req.body.email === "") || (req.body.pass === "")) 
      res.status(400).json({Message: "Campos Não preenchidos"});

    const { name, phone, email, pass} = req.body;
    

    // salvar barbeiro na base de dados
    await Barber.RegisterBarber(email,pass,name,phone,(err, data) => {
      if (err){
        res.status(500).json({message: "Ocorreu algum erro ao criar o barbeiro: O Barbeiro já existe"});
      }else{
        res.status(200).json({message: "ok"});
      }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * Chama todos os barbeiros e lista toda a sua informação
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.GetBarberAllDetails_get = async (req, res,next) => {
  try {
    await Barber.GetBarberAllDetails((err, data) => {
      if (err)
        res.status(500).json({
          message:
            err.message || "Ocorreu algum erro para obter os dados dos barbeiros"
        });
      else res.status(200).json(data);
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};


exports.GetCurrentScheduleFromBarber_GET = async (req,res,next)=>{
  try {
    if(!req.params) return res.status(404).json({message:"bad request"});
    const{id} = req.params;
    await Barber.GetCurrentScheduleFromBarber(id,(err,data)=>{
      if (err)
        res.status(500).json({
          message:
            err.message || "Ocorreu algum erro ao obter as marcações"
        });
      else res.status(200).json(data[0]);
    });  
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.UpdateBarber_put = async (req, res,next) => {
  try {
    if(!req.params) return res.status(404).json({message:"bad request"});
    const{id} = req.params;
    if (!req.body)
      res.status(400).json({message: "Conteudo nao pode estar vazio!"});
  
    if(req.body.phone != "")
      await Barber.UpdateBarberPhone(req.body.phone,id, (err, data) => {
        if (err)
          res.status(500).json({ message: err.message || "Ocorreu algum erro ao atualizar o conteudo"});
      });
  
    if (req.body.name != "")
      await Barber.UpdateBarberName(req.body.name,id, (err1, data1) => {
        if (err1)
          res.status(500).json({ message: err1.message || "Ocorreu algum erro ao atualizar o conteudo"});
      });
    res.status(200).json({message: "Feito Com Sucesso!"});  
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.GetBarberInfo_get = async (req, res,next) => {
  try {
    if(!req.params) return res.status(404).json({message:"bad request"});
    const{id} = req.params;
    await Barber.GetBarberInfo(id,(err, data) => {
      if(err)
        {
          res.status(500).json({message: err.message || "Ocorreu um erro a obter informacao sobre o barbeiro"});
        }  
      res.status(200).json(data[0]);
    });  
  } catch (error) {
    console.log(error);
    next(error);
  }
}