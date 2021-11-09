# GreenSmart ECommerce Website
A Full Ecommerce built with React - Redux - Node.js - Express - MongoDB.

## Demo Website

- 👉 Heroku : [https://my-greensmart.herokuapp.com/](https://my-greensmart.herokuapp.com/)

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:kevinburrafato/GreenSmart
```

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create an .env file in root folder, use the .envexample file
  - Set MONGODB_URL=mongodb://localhost/greensmart 

- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Set MONGODB_URL=mongodb+srv://your-db-connection 

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd client
$ npm install
$ npm start
```

### 5. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/users/seed
- It returns admin email and password
- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 8 sample products


