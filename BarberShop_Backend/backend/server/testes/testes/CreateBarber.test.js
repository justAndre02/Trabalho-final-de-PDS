const app = require("../../server.js");
const request = require("supertest");
//import 'regenerator-runtime/runtime';
//import "babel-polyfill";

describe("CreateBarber", () => {

    it("should create a Barber", async () => {

        const response = await request(app).post("/barber/signup").send({
           name: "Legion3",
           phone: "1234567866",
            email: "testttr@example.com",
            pass: "testtr",
        })
        //console.log(response.status);
        expect(response.status).toBe(500);
    })


    it("should not be able to create an existing barber", async () => {

      
         const response = await request(app).post("/barber/signup").send({
            name: "Legion2",
            phone: "123456783",
            email: "testt2@example.com",
            pass: "test",
         })
            /*console.log(response);*/
          expect(response.status).toBe(500);
    })

    it("should not be able to create a barber without data", async () => {

        const response = await request(app).post("/barber/signup").send({
            name: "",
            phone: "",
            email: "",
            pass: "",
        })

        //console.log(response.status);

        expect(response.status).toBe(400);
    })
})