const sql = require("./index.js");
class Customer 
{
    /**
     * Chama uma query da base de dados encarregue de registar um novo cliente
     * @param  {char} newCustomer Devolve a identificação do novo cliente
     * @param  {*} result Retorna um erro, caso este exista
     */
    static async RegisterCustomer(name,nif, result) {
        const[rows,fields] = await sql.execute(`CALL RegisterCustomer(${nif},"${name}")`);
        if (rows[0]) {
            //console.log("error: ", rows[0][0]);
            result("User exist", null);
        }else{
                //console.log("created customer");
                result(null,null);
             }
    }

    /**
     * Chama uma query da base de dados encarregue de chamar todos os clientes
     * @param  {*} result Retorna um erro, caso este exista
     */
    static async GetCustomers(result) {
        let query = "call GetCustomers()";
        const[rows,fields] =  await sql.execute(query);
        //console.table(rows[0]);
        result(null,rows[0]);
    }

    /**
     * Chama uma query da base de dados encarregue de chamar o cliente com o NIF indicado pelo utilizador
     * @param  {int} nif NIF que o utilizador usa para identificar um cliente
     * @param  {*} result Retorna um erro, caso este exista
     */
    static async GetCustomerbyNif(nif,result) {
        let query = `call GetCustomerbyNif(${nif})`;
        const[rows,fields] = await sql.execute(query);
        if (!rows[0][0].NIF) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null, rows);
        }
    }

    /**
     * Apresenta as marcações feitas por um determinado cliente
     * @param {int} nif NIF do cliente a procurar
     * @param {*} result Retorna um erro, caso este exista
     */
    static async GetCurrentScheduleFromCustomer(nif,result){
        var query = `call GetCurrentScheduleFromCustomer(${nif})`;
        const[rows,fields] = await sql.execute(query);
        if (!rows[0][0].SCid) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null, rows);
        }
    }

    static async GetCustomerInfo(id, result)
    {
        var query = `call GetCustomerInfo(${id})`
        const[rows,fields] = await sql.execute(query);
        console.log(rows)
        if (!rows[0][0].NIF) {
            //console.log("error: ",rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }
}


module.exports = Customer;