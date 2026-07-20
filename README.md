# Flyrank Backend (FastAPI Migration)

This is the backend for Flyrank, migrated from Node.js (Express.js) to Python (FastAPI with SQLite).

## Features

- Fully-featured CRUD API for tasks.
- Automatic SQLite database initialization on first run.
- Automatically generated interactive Swagger API documentation.

## Project Structure

- `main.py`: Main FastAPI application logic and SQLite CRUD endpoints.
- `requirements.txt`: Python dependencies.
- `.gitignore`: Configured to ignore SQLite database files (`*.db`), caching, and virtual environments.

## Getting Started

### 1. Prerequisites

Make sure Python 3.8+ is installed on your system.

### 2. Install Dependencies

You can install the required dependencies using pip:

```bash
pip install -r requirements.txt
```

### 3. Run the Application

Start the local development server with Uvicorn:

```bash
python -m uvicorn main:app --reload
```

The server will run on [http://localhost:8000](http://localhost:8000).

### 4. API Documentation

Once the server is running, you can access the interactive API docs at:
- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)
