const VipCustomer = require("../db/vipcustomer.js");
const LoginUser = require("../db/loginUser.js");

exports.RegistryVIPCustomer_post = async (req, res, next) => {
  try {
    // Validar request
    if (!req.body)
      res.status(400).json({message: "Conteudo nao pode estar vazio!"});

    // verificar se os campos foram preeenchidos
    if((req.body.nif === "") || (req.body.pid === "") || (req.body.email === "") || (req.body.pass === ""))
      res.status(400).json({Message: "Campos Não preenchidos"});


    // Create a VipCustomer
    const {nif,email,pass,pid} = req.body;

    // Save VipCustomer in the database
    await VipCustomer.RegistryVIPCustomer(nif,email,pass,pid, (err, data) => {
      if (err){ res.status(500).json({message: err.message || "Ocorreu algum erro ao criar o ClienteVIP"});}
      else {
        res.status(200).json({message: "ok"});
        }
    });      
  } catch (error) {
    console.log(error);
    next(error);
  }
};


exports.GetVIPCustomersAllDetails_get = async (req, res, next) => {
  try {
    await VipCustomer.GetVIPCustomersAllDetails((err, data) => {
      if (err){  res.status(500).json({message: err.message || "Ocorreu algum erro ao obter os Clientes Vips"}); }
      else res.status(200).json(data);
    });      
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.GetCurrentScheduleFromCustomer_GET = async (req,res, next)=> {
  try {
    if(!req.params) return res.status(404).json({message:"bad request"});
    const{nif} = req.params;
    await VipCustomer.GetCurrentScheduleFromCustomer(nif,(err,data)=>{
      if (err){ res.status(500).json({message: err.message || "Ocorreu algum erro ao obter a agenda do ClienteVip"}); }
      else {console.log(data),res.status(200).json(data);}
    });      
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.UpdateVIPName_put = async (req, res, next) => {
  try {
    if (!req.body)
    res.status(400).json({message: "Conteudo nao pode estar vazio!"});

    if(!req.params) return res.status(404).json({message:"bad request"});
    const{id} = req.params;
    await VipCustomer.UpdateVIPName(req.body.name,id, (err, data) => {
      if (err)
        res.status(500).json({message: err.message || "Ocorreu algum erro a atualizar"});
      else
        res.status(200).json("message: Feito Com Sucesso!");
    });    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.GetVipInfo_get = async (req, res, next) => {
  try {
    if(!req.params) return res.status(404).json({message:"bad request"});
    const{id} = req.params;
    await VipCustomer.GetVipInfo(id,(err, data) => {
      if(err)
      {
        res.status(500).json({message: err.message || "Ocorreu um erro a obter informacao sobre o barbeiro"});
      }
      res.status(200).json(data);
    });      
  } catch (error) {
    console.log(error);
    next(error);
  }
}