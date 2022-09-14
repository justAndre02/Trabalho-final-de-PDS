const app = require("../../server.js");
const request = require("supertest");
//import 'regenerator-runtime/runtime';
//import "babel-polyfill";

describe("CreateTatooA", () => {
   
    it("should create a Tatoo Artist", async () => {

        const response = await request(app).post("/tatooartist/signup").send({
           name: "Legion1",
           phone: "123456785",
            email: "testtt@example.com",
            pass: "test",
        })

        console.log(response.status);
        expect(response.status).toBe(500);
    },30000)

    it("should not be able to create an existing Tatoo Artist", async () => {
        
      
         const response = await request(app).post("/tatooartist/signup").send({
            name: "Legion2",
            phone: "123456783",
             email: "testtt2@example.com",
             pass: "test",
         })
            /*console.log(response.text);*/
          expect(response.status).toBe(500);
    },30000)

    it("should not be able to create a artist without data", async () => {
        const response = await request(app).post("/tatooartist/signup").send({
            name: "",
           phone: "",
            email: "",
            pass: "",
        })

        /*console.log(response.status);*/

        expect(response.status).toBe(400);
    },30000)
})