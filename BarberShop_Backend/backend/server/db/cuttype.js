const sql = require("./index.js");

class CutType 
{


    static async GetAllCutType(result) {
        let query = "call GetAllCutType()";
        const [rows, fields] = await sql.execute(query);
        //console.table(rows[0]);
        result(null, rows[0]);
    }

}

  
module.exports = CutType;