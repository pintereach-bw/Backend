const request = require("supertest");
const db = require("../data/dbConfig");

const server = require("../server");

describe("article-route.js with middleware", () => {
  afterEach(async () => {
    await db("articles").truncate();
  });
  it("should set to testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("should return 401 unauthorized", async () => {
    const res = await request(server).get("/api/articles/");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for /:id", async () => {
    const res = await request(server).get("/api/articles/:id/");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for POST /", async () => {
    const res = await request(server).post("/api/articles/");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for PUT /", async () => {
    const res = await request(server).put("/api/articles/:id");
    expect(res.status).toBe(401);
  });

  it("should return 401 unauthorized for Delete /", async () => {
    const res = await request(server).delete("/api/articles/:id");
    expect(res.status).toBe(401);
  });
});

// describe("Should not POST '/api/articles'", () => {
//   it("should return 200 ok", async () => {
//     const articles = {
//       title: "Pokemon electronic game",
//       summary: "This is a little summart about the article..",
//       link: "https://www.britannica.com/topic/Pokemon-electronic-game",
//       image:
//         "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
//       category_name: "Test Article"
//     };
//     const res = await request(server)
//       .post("/games")
//       .send(game);
//     expect(res.status).toEqual(201);
//   });

// });
