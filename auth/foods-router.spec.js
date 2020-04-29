const request = require("supertest");
const server = require("../server.js");

describe("POST to /api/foods", () => {
    it("add food", () => {
        return request(server)
          .post("/api/foods")
          .send({
            item_name: 'test food', 
            claimed: true
          })
          .then(res => {
            expect(res.status).toBe(201);
          })
    })
    it("returns JSON formatted body", () => {
        return request(server)
            .post("/api/foods")
            .then(res => {
                expect(res.type).toMatch(/json/);
        });
    });
})