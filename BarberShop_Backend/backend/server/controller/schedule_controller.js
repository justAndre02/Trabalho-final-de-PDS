const Schedule = require("../db/schedule")

exports.MakeScheduling_post = async (req,res,next)=>{
    try {
        if (!req.body)
            res.json({message: "Conteúdo não pode estar vazio!"});

        // verificar se os campos foram preeenchidos
        if((req.body.Bid === "") || (req.body.date === "") || (req.body.Time === ""))
            res.json({message: "Campos Não preenchidos"});
    
        if((req.body.ServiceType === "") || (req.body.Desc === "") || (req.body.typeId === "") || (req.body.FuncId === ""))
            res.json({message: "Campos Não preenchidos"});
        
        
        const { Bid, date, Time, ServiceType, Desc, typeId, FuncId} = req.body;
        let checkDate = date;
        let actualdate = new Date();
        if (Number(checkDate.substring(0,4)) < Number(actualdate.getFullYear()) || Number(Time.substring(0,2)) < 6 || Number(Time.substring(0,2) > 22) || Number(Time.substring(3,5)) < 0 || Number(Time.substring(3,5)) > 59 || Number(checkDate.substring(5,7)) > 12  || Number(checkDate.substring(8,10)) > 31  )
        {      
            return res.json({message: "Data ou tempo incorretos"});
        }
        if(Number(checkDate.substring(0,4)) == Number(actualdate.getFullYear())){
            if(Number(checkDate.substring(5,7)) < Number(actualdate.getMonth())+1){
                return res.json({message: "Data ou tempo incorretos"});
            }else{
                if(Number(checkDate.substring(5,7)) == Number(actualdate.getMonth())+1){
                    if(Number(checkDate.substring(8,10)) < Number(actualdate.getDate())){
                         return res.json({message: "Data ou tempo incorretos"});
                    }
                }
            }
        }
        if(!req.params) return res.status(404).json({message:"bad request"});
        const{nif} = req.params;

        await Schedule.MakeScheduling(nif,Bid,ServiceType,Desc,date,Time,typeId, FuncId,(err,data)=>{
            if (err)
                res.json({ message: err.message || "Ocorreu algum erro ao fazer a Marcação" });
            else 
                res.json({message:"Feito com Sucesso"});
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.CancelScheduling_post = async (req,res, next)=>{
    try {
        if (!req.body)
            res.status(400).json({message: "Conteudo nao pode estar vazio!"});

        // verificar se os campos foram preeenchidos
        if(req.body.Scid === "")
            res.status(400).json({Message: "Campos Não preenchidos"});
    
        const { Scid } = req.body;
        await Schedule.CancelScheduling(Scid,(err,data)=>{
            if (err)
                res.status(500).json({ message: err.message || "Ocorreu algum erro ao cancelar a Marcação" });
            else 
                res.status(200).json({message:"Feito com Sucesso"});
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};





