const Customer = require("../db/customer.js");

exports.RegisterCustomer_post = async (req, res, next) => {
  try {
      // Validar request
    if (!req.body)
      res.status(400).json({message: "Conteudo nao pode estar vazio!"});

    // verificar se os campos foram preeenchidos
    if((req.body.nif === "") || (req.body.name === ""))
      res.status(400).json({Message: "Campos Não preenchidos"});

    const { name, nif} = req.body;

    // Salvar cliente na base de dados
    await Customer.RegisterCustomer(name,nif, (err, data) => {
      if (err){
        res.status(500).json({ message: "Ocorreu algum erro ao criar o Cliente" });
      }else{ 
        res.status(200).json({Message: "OK"});
      }
    });    
  } catch (error) {
    console.log(error);
    next(error);
  }
};


exports.GetCustomers_get = async (req, res, next) => {
  try {
    await Customer.GetCustomers((err, data) => {
      if (err){
        res.status(500).json({ message: err.message || "Ocorreu algum erro ao obter os Clientes" });
      }else{ 
        res.status(200).json(data);
      }
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
    await Customer.GetCurrentScheduleFromCustomer(nif,(err,data)=>{
      if (err)
        res.status(500).json({ message: err.message || "Ocorreu algum erro ao obter as marcações" });
      else 
        res.status(200).json(data[0]);
    }); 
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.GetCustomerInfo_get = async (req, res,next) => {
  try {
      if(!req.params) return res.status(404).json({message:"bad request"});
      const{nif} = req.params;
      await Customer.GetCustomerInfo(nif,(err, data) => {
      if(err)
      {
        res.status(500).json({message: err.message || "Ocorreu um erro a obter informacao sobre o cliente"});
        return;
      }
        
      res.status(200).json(data[0]);
      return;
    });  
  } catch (error) {
    console.log(error);
    next(error);
  }
}

