import { app } from "../../app";
import request from "supertest";

describe("/users", () => {
  describe("GET /users", () => {
    it("should respond with an array containing users", async () => {
      const response = await request(app)
        .get("/users")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        if (response.body.length > 0) {
          expect(response.body[0]).toHaveProperty("id");
          expect(response.body[0]).toHaveProperty("email");
          expect(response.body[0]).toHaveProperty("password");
          expect(response.body[0]).toHaveProperty("role");
        }
      
    });
  });
  describe("POST /users", () => {
    it("should successfully create a new user", async () => {
      await request(app)
        .post("/users")
        .set("Accept", "application/json")
        .send({
          id: 1,
          email: "mail@mail.yo",
          password: "password",
          role: "trainer"
        })
        .expect("Content-Type", /json/)
        .expect(201);
    });
  });

  describe("GET /users/:id", () => {
    it("should respond with a single user", async () => {
      await request(app)
        .get("/users/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
  
  // describe("PUT /users/:id", () => {
  //   it("should put update with an updated user", async () => {
  //     await request(app)
  //       .put("/users/1")
  //       .set("Accept", "application/json")
  //       .send({
  //         email: "mail@mail.yo",
  //         password: "password",
  //         role: "trainee"
  //       })
  //       .expect("Content-Type", /json/)
  //       .expect(200);
  //   });
  // });
  // describe("DELETE /users/:id", () => {
  //   it("should delete a single user", async () => {
  //     await request(app)
  //       .delete("/users/1")
  //       .set('Accept', 'application/json')
  //       .expect(200)
  //   });
  // });
});
