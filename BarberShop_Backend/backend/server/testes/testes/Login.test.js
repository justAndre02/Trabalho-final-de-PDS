const app = require("../../server.js");
const request = require("supertest");
//import 'regenerator-runtime/runtime';
//import "babel-polyfill";

describe("Login", () => {

    it("should be able to Login", async () => {

        const response = await request(app).post("/login/").send({
            email: "nunofreits@gmail.com",
            pass: "12345678",
        })

        /*console.log(response.status);*/

        expect(response.status).toBe(200);
    })

    it("should not be able to login with wrong data", async () => {

        const response = await request(app).post("/login/").send({
            email: "Legion@example.com",
            pass: "test",
        })
            /*console.log(response);*/
          expect(response.status).toBe(500);
    })

    it("should not be able to login without data", async () => {

        const response = await request(app).post("/login/").send({
            email: "",
            pass: "",
        })
            /*console.log(response);*/
          expect(response.status).toBe(400);
    })

    it("should be able to Login a normal customer", async () => {

        const response = await request(app).post("/login/common").send({
            nif: "123",
            name: "Artur",
        })

        /*console.log(response.status);*/

        expect(response.status).toBe(200);
    })

    it("should not be able to login a normal customer with wrong data", async () => {

        const response = await request(app).post("/login/common").send({
            nif: "0",
            name: "Legionella",
        })
            /*console.log(response);*/
          expect(response.status).toBe(500);
    })

    it("should not be able to login a normal customer without data", async () => {

        const response = await request(app).post("/login/common").send({
            nif: "",
            name: "",
        })
            /*console.log(response);*/
          expect(response.status).toBe(400);
    })
})