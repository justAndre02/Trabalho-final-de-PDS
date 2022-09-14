const sql = require("./index.js");

class Plan 
{

    static async GetAllMonthlyPlan(result) {
        let query = "call GetAllMonthlyPlan()";
        const [rows, fields] = await sql.execute(query);
        //console.table(rows[0]);
        result(null, rows[0]);
    }

}

  
module.exports = Plan;