# MERN Todo Management App

A full-stack Todo Management Application built using the MERN stack. This application allows users to create, view, update, delete, and manage todos with completion status.

## Features

- Create New Todo
- Get All Todos
- Update Existing Todo
- Delete Todo
- Mark Todo as Completed
- Track Todo Completion Status
- RESTful API Integration
- Error Handling
- Backend Validation

## Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```text
todo-management-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── app.js
│   └── index.js
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
```

## Installation & Setup

### 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/todos` | Create a new Todo |
| GET | `/api/todos` | Get all Todos |
| PUT | `/api/todos/:id` | Update a Todo |
| DELETE | `/api/todos/:id` | Delete a Todo |

## Learning Outcomes

- Building RESTful APIs
- Implementing CRUD Operations
- MongoDB Database Management
- React State Management
- Express Middleware
- Backend Validation
- Error Handling
- Frontend and Backend Integration

## Author

**Adnan Haider**

MERN Stack Developer

