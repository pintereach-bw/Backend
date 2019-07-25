# # [Pintereach Backend](https://github.com/pintereach-bw)

Hi! This is the back-end documentation for the **[Pintereach](https://github.com/pintereach-bw)** project.
This is the link to our [TDD FORM](https://docs.google.com/document/d/1udh5Wk8TOqJB-R949SRy242c9HR9ayK8Wi6tZN2WZwU/edit) of what our application accomplishes.

# Database Design

[Image link to the design](https://imgur.com/a/B6CkLxA)

# Authentication

<p>  What is the preferred way of using the API? The API supplies a token upon logging in and is required to perform any CRUD actions.</p>

# Endpoints

### Registration

POST / https://build-week-pintereach.herokuapp.com/api/auth/register

```
Should Get Status 201
{
	"username":"taslim",
	"password":"taslim"
}
```

### Login

POST / https://build-week-pintereach.herokuapp.com/api/auth/login

```
Should Get Status 200
{
    "message": "Welcome taslim!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InJveCIsImlhdCI6MTU2MTM5ODcxNCwiZXhwIjoxNTYyMzQ5MTE0fQ.TUGs2t-sRBkoJBI6Qly5qUMsAGvV5tNHESJ4I2hPDt8"
}
```

### Get a list of articles

GET / https://build-week-pintereach.herokuapp.com/api/articles/

```
Should Get Status 200
{
            "id": 1,
            "title": "Pokemon electronic game",
            "summary": "Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.",
            "link": "https://www.britannica.com/topic/Pokemon-electronic-game",
            "image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
            "user_id": 1,
            "category": "Game"
        },
        {
            "id": 2,
            "title": "Dota 2",
            "summary": "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
            "link": "https://en.wikipedia.org/wiki/Dota_2",
            "image": "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg",
            "user_id": 2,
            "category: "Game"
        },
    "message": "You have gotten articles back"
```

### Add an article

POST / https://build-week-pintereach.herokuapp.com/api/articles/

```
Should Get Status 401 if a user does not have a token they are not allowed to post.
Should Get Status 200 if added successfully.

 {
    "id": 1,
	"title": "A test Title",
	"summary": "This is a little summary about the article..",
	"link": "https://www.britannica.com/topic/Pokemon-electronic-game",
	"image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
	"user_id": 1,
	"category": "Test Article"
}

```

### Delete an article

##### Path Variables `id`

DELETE / https://build-week-pintereach.herokuapp.com/api/articles/:id

### Update an article

PUT / https://build-week-pintereach.herokuapp.com/api/articles/:id

##### Path Variables `id`

```
 {
    "id": 1,
	"title": "Updated A test Title",
	"summary": "Updated This is a little summary about the article..",
	"link": "https://www.britannica.com/topic/Pokemon-electronic-game",
	"image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
	"user_id": 1,
	"category": "Updated Test Article"
}

```
