const sql = require("./index.js");

class ServiceType 
{

    static async GetAllServiceType(result) {
        let query = "call GetAllServiceType()";
        const[rows,fields] =  await sql.execute(query);
        //console.table(rows[0]);
        result(null,rows[0]);
    }

}

  
module.exports = ServiceType;