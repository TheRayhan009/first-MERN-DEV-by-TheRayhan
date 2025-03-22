# Rayprofile

## Description
Rayprofile is a MERN stack application that provides a platform for managing user profiles. It utilizes React for the frontend and Express with MongoDB for the backend.

## Installation

### Frontend
1. Navigate to the `rayprofile` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend
1. Navigate to the `server` directory.
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
- The frontend can be accessed at `http://localhost:3000` (or the port specified by Vite).
- The backend API can be accessed at `http://localhost:5000` (or the port specified in your server configuration).

## API Endpoints

### Get All Users
- **Endpoint**: `GET /`
- **Description**: Retrieves all users from the database.
- **Response**: Returns an array of user objects.

### Insert User
- **Endpoint**: `POST /insurt`
- **Description**: Inserts a new user into the database.
- **Request Body**:
  ```json
  {
    "Uname": "John Doe",
    "Uage": 30,
    "Unumber": "1234567890"
  }
  ```
- **Response**: "User Saved in Database"

### Delete User
- **Endpoint**: `POST /del`
- **Description**: Deletes a user based on their phone number.
- **Request Body**:
  ```json
  {
    "Unumber": "1234567890"
  }
  ```
- **Response**: "User Deleted" or "User Not Found"

### Edit User
- **Endpoint**: `POST /edit`
- **Description**: Updates an existing user's information.
- **Request Body**:
  ```json
  {
    "OldPnumber": "1234567890",
    "Gname": "Jane Doe",
    "Gage": 28,
    "GPnumber": "0987654321"
  }
  ```
- **Response**: "User Updated" or "User Not Found"

## Routes
- **`server/app/routes/web/route.js`**: Defines the API routes for user management.
  - `GET /`: Calls the `xx` controller to retrieve all users.
  - `POST /insurt`: Calls the `insurt` controller to add a new user.
  - `POST /del`: Calls the `del` controller to delete a user.
  - `POST /edit`: Calls the `edit` controller to update user information.

## Controllers
- **`server/app/contollers/webCon.js`**: Contains the logic for handling requests.
  - `xx`: Retrieves all users from the database.
  - `insurt`: Inserts a new user into the database.
  - `del`: Deletes a user based on their phone number.
  - `edit`: Updates an existing user's information.

## Dependencies

### Frontend
- **axios**: ^1.8.4
- **flowbite-react**: ^0.10.2
- **react**: ^19.0.0
- **react-dom**: ^19.0.0
- **react-toastify**: ^11.0.5

### Backend
- **cors**: ^2.8.5
- **dotenv**: ^16.4.7
- **express**: ^4.21.2
- **mongoose**: ^8.12.1

## License
This project is licensed under the ISC License.
