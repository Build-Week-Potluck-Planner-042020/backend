const request = require("supertest");
const server = require("../server.js");

let foodID

describe("POST to /api/foods", () => {
    it("add food", () => {
        return request(server)
          .post("/api/foods")
          .send({
            item_name: 'test food', 
            claimed: true
          })
          .then(res => {
            foodID = res.body.id
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

    it("should get food data when handed a food ID", () => {
        return request(server)
          .get(`/api/foods/${foodID}`)
          .then(res => {
            expect(res.status).toBe(200)
            expect(res.body.id).toBe(foodID)
          })
      })

      it("should successfully edit a food", () => {
        return request(server)
          .put(`/api/foods/${foodID}`)
          .send({
            item_name: "new test food",
            claimed: false
          })
          .then(res => {
            expect(res.status).toBe(200)
          })
      })
      
      it("should delete food successfully", () => {
        return request(server)
          .delete(`/api/foods/${foodID}`)
          .then(res => {
            expect(res.status).toBe(200)
          })
      })
})