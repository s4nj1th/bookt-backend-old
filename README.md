# Bookt Backend

A TypeScript-based backend for **Bookt** — a platform for book lovers to search, track, and review books.
Powered by the [OpenLibrary API](https://openlibrary.org/developers/api) and built with Express.

## Features

- Search books via OpenLibrary
- RESTful API structure
- Modular service/controller architecture
- Environment-based config loading
- Type-safe with TypeScript

## Tech Stack

- Node.js
- Express
- TypeScript
- OpenLibrary API

## Getting Started

### Prerequisites

- Node.js (>= 18)
- npm

### Install dependencies

```bash
npm install
```

### Setup Environment

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` to include:

```env
PORT=5000
OPENLIBRARY_BASE_URL=https://openlibrary.org
```

### Run the server (development)

```bash
npm run dev
```

The API will start at `http://localhost:5000`.

### Example Route

```
GET /api/books/search?q=harry+potter
```

## Project Structure

```
src/
  ├── controllers/
  ├── routes/
  ├── services/
  ├── middlewares/
  ├── config/
  └── app.ts
```

## License

This project is licensed under the [GNU General Public License v3.0](./COPYING).
