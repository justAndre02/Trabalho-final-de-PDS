const sql = require("./index.js");

class Barber 
{

    /**
     * Chama a stored procedure encarregue de registar um barbeiro
     * @param {*} email Devolve o barbeiro criado
     * @param {*} password Devolve a password criada 
     * @param {*} name Devolve a password criada 
     * @param {*} photo Devolve a password criada 
     * @param {*} result Devolve um erro, caso este exista
     */
    static async RegisterBarber(email,password, name, phone, result) {
        console.log(name,phone,email,password);
        const[rows,fields]= await sql.execute(`CALL RegisterBarber("${email}","${password}","${name}","${phone}")`);
        if (rows[0]){
            //console.log("error: ", rows[0][0]);
            result("User exist", null);
        }else {
            //console.log("created barber");
            result(null,null);
        }
    }

    

    

    /**
     * Chama uma query que vai listar todos os barbeiros
     * @param  {*} result Devolve um erro, caso este exista
     */
    static async GetBarberAllDetails(result) {
        let query = "call GetBarberAllDetails()";
        const[rows,fields] =  await sql.execute(query);
        //console.table(rows[0]);
        result(null,rows[0]);
    }

    /**
     * Permite alterar o nome de um barbeiro
     * @param {char} name Nome já existante de um barbeiro
     * @param {int} id Identificação de uma barbeiro
     * @param {*} result Retorna um erro, caso ele exista
     */
    static async UpdateBarberName(name,id,result) {
        let query = `call UpdateBarberName("${name}",${id})`;
        const[rows,fields] = await sql.execute(query);
        if (rows[0]) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            result(null,null);
        }
    }

    /**
     * Permite alterar o telemovel de um barbeiro
     * @param {char} phone Telefone já existente de um barbeiro
     * @param {int} id Identificação de uma barbeiro
     * @param {*} result Retorna um erro, caso ele exista
     */
    static async UpdateBarberPhone(phone,id,result) {
        let query = `call UpdateBarberPhone("${phone}",${id})`;
        const[rows,fields] = await sql.execute(query);
        if (rows[0]) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            result(null,null);
        }
    }

    /**
     * Apresenta todas as marcações associadas a um barbeiro
     * @param {int} id Identificação de um barbeiro
     * @param {*} result Dado a ser mudado
     */
    static async GetCurrentScheduleFromBarber(id,result){
        var query = `call GetCurrentScheduleFromBarber(${id})`;
        const[rows,fields] = await sql.execute(query);
        if (!rows[0][0].SCid) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }

    /**
     * Apresenta toda a informação de um barbeiro
     * @param {int} id Identificação de um barbeiro
     * @param {*} result Dado a ser mudado
     */
    static async GetBarberInfo(id, result) {
        var query = `call GetBarberInfo(${id})`
        const[rows,fields] = await sql.execute(query);
        if (!rows[0][0].Bid) {
            //console.log("error: ",rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }
}

  
module.exports = Barber;