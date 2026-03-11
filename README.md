# BootCampNodejs

A RESTful API built with **Node.js**, **Express**, and **MySQL** following an MVC architecture pattern.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Tech Stack](#tech-stack)

---

## Overview

This project is a Node.js bootcamp assignment that demonstrates a simple user management REST API. It connects to a MySQL database and exposes endpoints to create and retrieve users.

---

## Project Structure

```
BootCampNodejs/
├── app.js                  # Express app setup and middleware
├── server.js               # Server entry point
├── package.json
├── config/
│   └── db.js               # MySQL database connection
├── Controllers/
│   └── userControllers.js  # Request handlers (addUser, fetchUsers)
├── Models/
│   └── userModel.js        # Database queries (createUser, getAllUsers)
└── routes/
    └── UserRoute.js        # User route definitions
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [MySQL](https://www.mysql.com/) server running locally

---

## Installation

```bash
git clone https://github.com/AmosStack/Api_bootCamp.git
cd Api_bootCamp
npm install
```

---

## Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
```

Update `config/db.js` with your MySQL credentials if needed (default connects to `localhost:3306` with user `root`).

---

## Database Setup

Run the following SQL to create the required database and table:

```sql
CREATE DATABASE IF NOT EXISTS assignment_db;

USE assignment_db;

CREATE TABLE IF NOT EXISTS users (
  id    INT AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```

---

## Running the Server

**Development** (with auto-reload via nodemon):
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will start on the port defined in `.env` (e.g., `http://localhost:3000`).

---

## API Endpoints

### Base URL: `http://localhost:<PORT>`

| Method | Endpoint  | Description        |
|--------|-----------|--------------------|
| GET    | `/`       | Health check       |
| POST   | `/users`  | Create a new user  |
| GET    | `/users`  | Retrieve all users |

---

### GET `/`

**Response:**
```json
{ "message": "API is running" }
```

---

### POST `/users`

Create a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Success Response `201`:**
```json
{
  "message": "User added successfully",
  "id": 1
}
```

**Error Response `400`** (missing fields):
```json
{ "error": "Name and email are required" }
```

---

### GET `/users`

Retrieve all users ordered by most recent.

**Success Response `200`:**
```json
{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" }
  ]
}
```

---

## Tech Stack

| Package      | Purpose                        |
|--------------|--------------------------------|
| express      | HTTP server and routing        |
| mysql2       | MySQL database driver          |
| dotenv       | Environment variable management|
| body-parser  | Request body parsing           |
| nodemon      | Development auto-reload        |

