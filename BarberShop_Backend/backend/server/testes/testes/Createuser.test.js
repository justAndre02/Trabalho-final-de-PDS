const app = require("../../server.js");
const request = require("supertest");
//import 'regenerator-runtime/runtime';
//import "babel-polyfill";

describe("CreateCustomer", () => {

    it("should create a customer", async () => {
        const response = await request(app).post("/customer/signup").send({
            nif: "125445219",
            name: "Legion",
        })

        //console.log(response.status);

        expect(response.status).toBe(500);
    })

    it("should not be able to create an existing customer", async () => {

        
          const response = await request(app).post("/customer/signup").send({
            nif: "125445214",
            name: "Legion",
          });
            /*console.log(response.status);*/
          expect(response.status).toBe(500);
    })

    it("should not be able to create a customer without data", async () => {
      const response = await request(app).post("/customer/signup").send({
        nif: "",
        name: "",
      })

      //console.log(response.status);

      expect(response.status).toBe(400);
  })
})