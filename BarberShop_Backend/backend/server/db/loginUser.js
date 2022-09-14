const sql = require("./index.js");

class LoginUser{

    /**
     * Encarregue de apresentar  as autenticações dos barbeiros feitas no sistema
     * @param {char} email Email de acesso
     * @param {char} pass Password de acesso
     * @param {*} result Retorna um erro, caso este exista
     */
    static async GetLoginBarber(email,pass,result){
        const[rows,fields]= await sql.execute(`call GetLoginBarber("${email}","${pass}")`);
        if (!rows[0][0].Lid) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }

    /**
     * Encarregue de apresentar as autenticações dos tatuadores feitas no sistema
     * @param {char} email Email de acesso
     * @param {char} pass Password de acesso
     * @param {*} result Retorna um erro, caso este exista
     */
     static async GetLoginTattooArtist(email,pass,result){
        const[rows,fields]= await sql.execute(`call GetLoginTattooArtist("${email}","${pass}")`);
        if (!rows[0][0].Lid) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }

    /**
     * Encarregue de apresentar as autenticações dos vips feitas no sistema
     * @param {char} email Email de acesso
     * @param {char} pass Password de acesso
     * @param {*} result Retorna um erro, caso este exista
     */
     static async GetLoginVIP(email,pass,result){
        const[rows,fields]= await sql.execute(`call GetLoginVIP("${email}","${pass}")`);
        if (!rows[0][0].Lid) {
            //console.log("error: ", rows[0][0]);
            result(rows[0][0], null);
        }else{
            //console.table(rows[0]);
            result(null,rows);
        }
    }
}
module.exports = LoginUser;