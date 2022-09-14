const sql = require("./index.js");

class VipCustomer 
{

    /**
     * Acede a uma stored procedure encarregue de registar um novo cliente VIP
     * @param  {*} newVIPCustomer Devolve o NIF do vono cliente VIP
     * @param  {*} newLogin Devolve o email de acesso e a password criada
     * @param  {int} pid Devolve o id do plano na qual o cliente VIP aderiu
     * @param  {*} result Devolve um erro caso este exista
     */
     static async RegistryVIPCustomer(nif,email,pass,pid,result) {
        const[rows,fields] = await sql.execute(`CALL RegistryVIPCustomer("${email}","${pass}",${nif},${pid})`);
        if (rows[0]) {
            //console.log("error: ", rows[0][0]);
            result("User exist", null);
        }else{
            //console.log("created Vipcustomer");
            result(null,null);
        }
    }
    /**
     * Chama uma query responsavel pela listagem de todos os clientes VIP
     * @param  {*} result Devolve um erro, caso este exista
     */
    static async GetVIPCustomersAllDetails(result) {
        let query = "call GetVIPCustomersAllDetails()";
        const[rows,fields] =  await sql.execute(query);
        //console.table(rows[0]);
        result(null,rows[0]);
    }

    /**
     * Permite alterar o nome de um cliente VIP
     * @param {char} name Nome já existante de um cliente VIP
     * @param {int} id Identificação de um cliente VIP
     * @param {*} result Retorna um erro, caso ele exista
     */
    static async UpdateVIPName(name,id,result) {
        let query = `call UpdateVIPName("${name}",${id})`;
        const [rows, fields] = await sql.execute(query);
        if (rows[0]) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        } else {
            result(null, null);
        }
    }

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

    /**
     * Apresenta toda a informação sobre um cliente VIP
     * @param {int} id Identificação de um cliente VIP
     * @param {*} result Retorna um erro, caso ele exista
     */
    static async GetVipInfo(id, result)
    {
        var query = `call GetVipInfo(${id})`
        const[rows,fields] = await sql.execute(query);
        if (!rows[0][0].NIF) {
            //console.log("error: ",rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }
}


module.exports = VipCustomer;