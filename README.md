

# Car Wash Booking System




## Description

A simple service booking system that allows users to book services and manage bookings, with admin capabilities to manage services and slots.


## Features

- User Authentication (Sign Up, Login)
- CRUD operations for services (admin only)
- Slot management for bookings (admin only)
- User bookings


## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB
## Installation

Install for my project

```bash
    npm install bcrypt
    npm install cookie-parser
    npm install cors
    npm install dotenv
    npm install express
    npm install http-status
    npm install jsonwebtoken
    npm install mongoose"
    npm install zod
```
    
## API Endpoints

### User Routes

```http
  Sign Up: POST /api/auth/signup
```
```http
  Login: POST /api/auth/login
```
### Service Routes

```http
  Create Service (Admin Only): POST /api/services
```
```http
  Get a Service: GET /api/services/:id
```
```http
  Get All Services: GET /api/services
```
```http
  Update Service (Admin Only): PUT /api/services/:id
```
```http
  Delete Service (Admin Only): DELETE /api/services/:id
```
### Slot Routes

```http
  Create Slot (Admin Only): POST /api/slots
```
```http
  Get All Slots: GET /api/slots
```
```http
  Get Slots for a Service: GET /api/services/:serviceId/slots
```
```http
  Update Service (Admin Only): PUT /api/services/:id
```
```http
  Delete Slot (Admin Only): DELETE /api/slots/:id
```
### Booking Routes

```http
  Create Booking: POST /api/bookings
```
```http
  Get All Bookings (Admin Only): GET /api/bookings
```
```http
  Get My Bookings (User Only) : GET /api/my-bookings
```
```http
  Update Service (Admin Only): PUT /api/services/:id
```




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

`JWT_ACCESS_SECRET`


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```





