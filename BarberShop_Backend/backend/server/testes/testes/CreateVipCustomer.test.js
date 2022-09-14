const app = require("../../server.js");
const request = require("supertest");
//import 'regenerator-runtime/runtime';
//import "babel-polyfill";

describe("CreateVipC", () => {

    it("should create a Vip Customer", async () => {

        const response = await request(app).post("/vipcustomer/signup").send({
           nif: "125445219",
           pid: "3",
            email: "test33t@example.com",
            pass: "test",
        })

        /*console.log(response.status);*/

        expect(response.status).toBe(200);
    })

    it("should not be able to create an existing Vip Customer", async () => {

         await request(app).post("/vipcustomer/signup").send({
            nif: "125445219",
           pid: "2",
            email: "test43t@example.com",
            pass: "test",
         })
      
         const response = await request(app).post("/vipcustomer/signup").send({
            nif: "125445219",
           pid: "2",
            email: "test43t@example.com",
            pass: "test",
         })
            /*console.log(response);*/
          expect(response.status).toBe(500);
    })

    it("should not be able to create a Vip Customer without data", async () => {

        const response = await request(app).post("/vipcustomer/signup").send({
            nif: "",
           pid: "",
            email: "",
            pass: "",
        })

        //console.log(response.status);

        expect(response.status).toBe(400);
    })
})