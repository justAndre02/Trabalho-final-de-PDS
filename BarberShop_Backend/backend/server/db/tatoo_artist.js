const sql = require("./index.js");

class TatooArtist {
    /**
     * Chama uma stored procedure responsavel pelo registo de um novo tatuador
     * @param  {*} newTatooArtist Devolve o nome e o telemovel associados ao tatuador criado
     * @param  {*} newLogin Devolve o email de acesso e a password criada
     * @param  {*} result Retorna um erro, caso este exista
     */
    static async RegisterTattooArtist(email, password, name, phone, result) {
        const [rows, fields] = await sql.execute(`CALL RegisterTattooArtist("${email}","${password}","${name}","${phone}")`);
        if (rows[0]) {
            //console.log("error: ", rows[0][0]);
            result("User exist", null);
        } else {
            //console.log("created Tatoo Artist");
            result(null, null);
        }
    }

    /**
     * Chama a query encarregue de listar todos os tatuadores
     * @param {*} result Retorna um erro, caso este exista
     */
    static async GetTatooArtistAllDetails(result) {
        let query = "call GetTatooArtistAllDetails()";
        const[rows,fields] =  await sql.execute(query);
        //console.table(rows[0]);
        result(null,rows[0]);
    }

    /**
     * Permite alterar o nome de um tatuador
     * @param {char} name Nome já existante de um tatuador
     * @param {int} id Identificação de um tatuador
     * @param {*} result Retorna um erro, caso este exista
     */
    static async UpdateTatooArtistName(name, id, result) {
        let query = `call UpdateTattooArtistName("${name}",${id})`;
        const [rows, fields] = await sql.execute(query);
        if (rows[0]) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        } else {
            result(null, null);
        }
    }

    /**
     * Permite alterar o telemovel de um tatuador
     * @param {char} phone Telemovel já existante de um tatuador
     * @param {int} id Identificação de um tatuador
     * @param {*} result Retorna um erro, caso este exista
     */
    static async UpdateTatooArtistPhone(phone, id, result) {
        let query = `call UpdateTattooArtistPhone("${phone}",${id})`;
        const[rows,fields] = await sql.execute(query);
        if (rows[0]) {
            console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            result(null,null);
        }
    }

    /**
     * Apresenta as marcações associadas a um tatuador
     * @param {int} id Identificação do tatuador
     * @param {*} result Retorna um erro caso, este exista
     */
    static async GetCurrentScheduleFromTattooArtist(id, result) {
        var query = `call GetCurrentScheduleFromTattooArtist(${id})`;
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
     * Apresenta todas as informações sobre um tatuador
     * @param {int} id Identificação do tatuador
     * @param {*} result Retorna um erro caso, este exista
     */
    static async GetTatooArtistInfo(id, result) {
        var query = `call GetTatooArtistInfo(${id})`;
        const[rows,fields] = await sql.execute(query);
        if (!rows[0][0].Aid) {
            //console.log("error: ",rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }
}


module.exports = TatooArtist;