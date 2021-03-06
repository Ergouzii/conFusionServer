# Con Fusion Server

This is the backend server for a restaurant named _Con Fusion_,
a practice project for learning backend development with JavaScript.

### Technologies
Tech | Function
--- | ---
[Node.js](https://nodejs.org) | Runtime
[Express.js](https://expressjs.com) | application framework
[MongoDB](https://mongodb.com) | persistent data store
[Mongoose](https://mongoosejs.com) | ODM (object-document mapper)
[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) | Authentication

### Authentication

It uses simple JWT-based authentications, and APIs are as following:

Operation | Method | URL | Body
--- | --- | --- | ---
Signup | POST | /users/signup | `{ "username": "abc", "password": "xyz" }`
Login | POST | /users/login | `{ "username": "abc", "password": "xyz" }`
Logout (_not used_) | GET | /users/logout |

When you login, you'll receive a _`token`_ in the response body.
Put that token in the request header as `Authentication: Bearer <token>` to
access restricted endpoints. The default expiration time of the tokens in 1 hour.
You'll have to relogin and obtain new token when the current token expires.

## API Endpoints

Endpoint | Supported methods
--- | ---
`/dishes` | GET, POST, DELETE
`/dishes/<dishId>` | GET, PUT, DELETE
`/dishes/<dishId>/comments` | GET, POST, DELETE
`/dishes/<dishId>/comments/<commentId>` | GET, PUT, DELETE
`/promotions` | GET, POST, DELETE
`/promotions/<promoId>` | GET, PUT, DELETE
`/leader` | GET, POST, DELETE
`/leader/<leaderId>` | GET, PUT, DELETE
`/users` | GET

### Method documentation

Method | Description | Access Control
--- | --- | ---
GET | Retrieve record(s) | Usually public
POST | Insert new record in the collection | Requires authentication
PUT | Modify a record | Requires authentication
DELETE | Delete record(s) | Requires authentication

## Reference

- [Server-side Development with NodeJS, Express and MongoDB, Coursera](https://www.coursera.org/learn/server-side-nodejs)
