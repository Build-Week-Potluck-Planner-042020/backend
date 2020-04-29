const request = require("supertest");
const server = require("../server.js");

let testName = `testing${Date.now()}`
let token
let userID

describe("server", () => {
    test("runs the tests", () => {
        expect(true).toBe(true);
    });
});

describe("User should be able to register and login", () => {
    it("should register successfully", () => {
      return request(server)
        .post("/api/register")
        .send({
          username: testName,
          password: "testPassword"
        })
        .then(res => {
          expect(res.status).toBe(201);
        })
    })

    it("should login successfully", () => {
        return request(server)
          .post("/api/login")
          .send({
            username: testName,
            password: "testPassword"
          })
          .then(res => {
            token = res.body.token
            userID = res.body.id
            expect(res.status).toBe(201)
          })
    }, 30000)
});