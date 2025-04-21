# Insyd Backend

This is a proof-of-concept Node.js backend for the Insyd Notification System assignment. It handles user activity events and generates notifications stored in MongoDB.

## Features

- RESTful API endpoints for activities and notifications
- MongoDB integration using Mongoose
- Instant notification generation based on activity
- Modular codebase with separation of concerns

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- ES Modules
- CORS enabled

## Getting Started

1. Install MongoDB locally or use MongoDB Atlas
2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
PORT=3001
MONGODB_URI=your-mongo-uri
```

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Activities
- `POST /api/activity`
  ```json
  {
    "actorId": "string",
    "targetId": "string",
    "type": "follow|post|comment"
  }
  ```

### Notifications
- `GET /api/notifications/:userId`
- `PATCH /api/notifications/:notificationId/read`

## Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Request handlers
├── models/          # Mongoose models
├── routes/          # API routes
├── services/        # Business logic
└── index.js         # Entry point
```

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## Deployment
This backend is deployed on Render for demonstration purposes.
