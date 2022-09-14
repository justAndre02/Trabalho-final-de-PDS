const sql = require("./index.js");

class BarberShop 
{

    static async GeAllBarberShops(result) {
        let query = "call GetAllBarbershop()";
        const[rows,fields] =  await sql.execute(query);
        //console.table(rows[0]);
        result(null,rows[0]);
    }

}

  
module.exports = BarberShop;