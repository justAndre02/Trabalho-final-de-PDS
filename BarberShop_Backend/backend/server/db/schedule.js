const sql = require("./index.js");

class Schedule{

    /**
     * Marcação de um serviço
     * @param {int} nif NIF de um cliente
     * @param {int} bid Identificação de uma barbearia
     * @param {int} ServId Identificação do tipo de serviço
     * @param {char} desc Descrição do serviço a realizar
     * @param {date} date Data marcada
     * @param {time} time Hora marcada
     * @param {int} FuncId Identificação do funcionário encarregue de um serviço
     * @param {*} result Retorna um erro, caso ele exista
     */
    static async MakeScheduling(nif,bid,ServId,desc,date,time,typeId, FuncId,result) {
        console.log(date)
        let query = `call Schedule(${nif},"${date}",${bid},${ServId},"${desc}","${time}", ${typeId},${FuncId})`;
        const[rows,fields] = await sql.execute(query);
        if(rows[0]){
            result(rows[0][0].erro,null);
        }else{
            result(null,null);
        }
    }

    /**
     * Cancela uma sessão
     * @param {int} id Identificação da sessão a cancelar
     * @param {*} result Retorna um erro caso, este exista
     */
    static async CancelScheduling(id,result){
        let query = `call CancelSchedule(${id})`;
        const[rows,fields] = await sql.execute(query);
        if(rows[0]){
            result(rows[0][0],null);
        }else{
            result(null,null);   
        }
    }
}

module.exports = Schedule;
