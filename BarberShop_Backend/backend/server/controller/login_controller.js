const LoginUser = require("../db/loginUser.js");
const Customer = require("../db/customer");
var jwt = require('jsonwebtoken');

exports.GetLoginBarber_POST = async (req, res, next) => {
  try {
   // Validar request
    if (!req.body)
      res.status(400).json({ message: "Conteudo nao pode estar vazio!" });

    // verificar se os campos foram preeenchidos
    if ((req.body.email === "") || (req.body.pass === ""))
      res.status(400).json({ Message: "Campos Não preenchidos" });

    const { email, pass } = req.body;

    await LoginUser.GetLoginBarber(email, pass, (err, data) => {
      if (err)
        res.status(500).json({ message: err.message || "Erro ao efetuar o login" });
      else {
        results = JSON.parse(JSON.stringify(data[0]));
        console.log(results[0].email,results[0].Lid, results[0].password)
        if ((results[0].email == email) && (results[0].password == pass)) {
          let token = jwt.sign(results[0],'secret',{expiresIn:'1h'})
          res.status(200).json({token,UserEmail:results[0].email,UserId:results[0].Lid});
        }
        else res.status(404).json({ message: "Usuario não encontrado" });
      }
    }); 
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.GetLoginTattooArtist_POST = async (req, res, next) => {
  try {
   // Validar request
    if (!req.body)
      res.status(400).json({ message: "Conteudo nao pode estar vazio!" });

    // verificar se os campos foram preeenchidos
    if ((req.body.email === "") || (req.body.pass === ""))
      res.status(400).json({ Message: "Campos Não preenchidos" });

    const { email, pass } = req.body;

    await LoginUser.GetLoginTattooArtist(email, pass, (err, data) => {
      if (err)
        res.status(500).json({ message: err.message || "Erro ao efetuar o login" });
      else {
        results = JSON.parse(JSON.stringify(data[0]));
        console.log(results[0].email,results[0].Lid, results[0].password)
        if ((results[0].email == email) && (results[0].password == pass)) {
          let token = jwt.sign(results[0],'secret',{expiresIn:'1h'})
          res.status(200).json({token,UserEmail:results[0].email,UserId:results[0].Lid});
        }
        else res.status(404).json({ message: "Usuario não encontrado" });
      }
    }); 
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.GetLoginVIP_POST = async (req, res, next) => {
  try {
   // Validar request
    if (!req.body)
      res.status(400).json({ message: "Conteudo nao pode estar vazio!" });

    // verificar se os campos foram preeenchidos
    if ((req.body.email === "") || (req.body.pass === ""))
      res.status(400).json({ Message: "Campos Não preenchidos" });

    const { email, pass } = req.body;

    await LoginUser.GetLoginVIP(email, pass, (err, data) => {
      if (err)
        res.status(500).json({ message: err.message || "Erro ao efetuar o login" });
      else {
        results = JSON.parse(JSON.stringify(data[0]));
        console.log(results[0].email,results[0].Lid, results[0].password)
        if ((results[0].email == email) && (results[0].password == pass)) {
          let token = jwt.sign(results[0],'secret',{expiresIn:'1h'})
          res.status(200).json({token,UserEmail:results[0].email,UserId:results[0].Lid});
        }
        else res.status(404).json({ message: "Usuario não encontrado" });
      }
    }); 
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.GetLoginNormalCustomer_POST = async (req, res, next) => {
  try {
    // Validar request
    if (!req.body)
      res.status(400).json({ message: "Conteudo nao pode estar vazio!" });

    // verificar se os campos foram preeenchidos
    if ((req.body.nif === "") || (req.body.name === ""))
      res.status(400).json({ Message: "Campos Não preenchidos" });

    const { nif, name } = req.body;

    await Customer.GetCustomerbyNif(nif, (err, data) => {
      if (err)
        res.status(500).json({ message: err.message || "Erro ao efetuar o login" });
      else {
        results = JSON.parse(JSON.stringify(data[0]));
        if ((results[0].NIF == nif) && (results[0].name == name)) {
          let token = jwt.sign( results[0],'secret',{expiresIn:'3h'})
          res.status(200).json({token,name:results[0].name,NIF:results[0].NIF});
        }
        else
          res.status(404).json({ Message: "Usuario não encontrado" });
      }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};