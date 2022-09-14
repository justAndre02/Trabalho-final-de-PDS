const sql = require("./index.js");

class TattooType 
{

    static async GetAllTattooType(result) {
        let query = "call GetAllTattooType()";
        const [rows, fields] = await sql.execute(query);
        //console.table(rows[0]);
        result(null, rows[0]);
    }
}

  
module.exports = TattooType;