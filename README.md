# fnhipster API

(work in progress)

Run server: `npm start`

Run Tests: `npm test`

- [ ] Documentation
- [X] Post CRUD
- [X] Routes
- [X] Model Class
    - [X] Unit Testing
- [X] Controller Class
    - [X] Unit Testing
- [ ] View as jSON Template?
- [ ] Authentication
- [ ] Database Config

---
## Routes
`./app/routes.js`

|Route|HTTP Verb|Description|
|-----|:-------:|----------|
|/api/posts|GET|Get all the posts.|
|/api/posts|POST|Create a post.|
|/api/posts/:id|GET|Get a single post.|
|/api/posts/:id|PUT|Update a post with new info.|
|/api/posts/:id|DELETE|Delete a post.|
|/api/users|GET|Get all the users.|
|/api/users|POST|Create a user.|
|/api/users/:id|GET|Get a single user.|
|/api/users/:id|PUT|Update a user with new info.|
|/api/users/:id|DELETE|Delete a user.|

---
