const sql = require("./index.js");

class TimeTable {
    /**
     * Apresenta o horário de uma determinada barbearia 
     * @param {int} Bid Identificação de uma barbearia
     * @param {*} result Retorna um erro, caso este exista
     */
    static async ShowTimeTable(Bid, result)
    {
        const[rows,fields] = await sql.execute(`CALL ShowTimeTable(${Bid})`);
        if(err) {
            result(err,null);   
        }
        else {
            //console.table(rows[0]);
            result(null, rows[0]);
        }
    }
}

module.exports = TimeTable;