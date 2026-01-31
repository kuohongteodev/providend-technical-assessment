# Notes API

This is a simple Notes API implemented using **NestJS**. It allows you to manage notes associated with clients, including retrieving and adding notes for a specific client.

## Features Implemented

- **Get Notes by Client ID**: Fetch all notes associated with a specific client.
- **Add Note for Client ID**: Add a new note for a given client.
- **Authorization Guard**: `ClientAssignmentGuard` ensures only authorized access to client-specific notes.

## Project Structure

- `notes.controller.ts` – Handles incoming HTTP requests related to notes.
- `notes.service.ts` – Contains the business logic for retrieving and adding notes.
- `models/note.model.ts` – DTO for creating a note.
- `common/guards/client-assignment.guard.ts` – Guard to check client access permissions.

## How to Run Frontend

1. **Go to frontend folder**:
   ```bash
   cd frontend
2. **Install Dependency**:
   ```bash
   npm i
3. **Run the Project**:
   ```bash
   npm run dev

## How to Run Backend

1. **Go to frontend folder**:
   ```bash
   cd backend
2. **Install Dependency**:
   ```bash
   npm i
3. **Run the Project**:
   ```bash
   npm run start:dev

## Improvements
1. **Unit tests**:
2. **Real auth implementation**:
3. **Database Integration**:
4. **Error handling**:

