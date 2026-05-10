```md
# Fullstack Posts App (Laravel + Nuxt 4)

A simple but modern fullstack application built with:

- Laravel 13 (REST API)
- Nuxt 4 (Frontend)
- TailwindCSS (UI)
- MySQL (Database)

This project is a learning-focused fullstack app that demonstrates how to connect a Laravel backend with a Nuxt frontend.

---

# Features

- Create posts
- View posts
- Delete posts
- Clean API architecture
- Modern Nuxt composable pattern
- Fully responsive UI

---

# Project Structure

```

root/
│
├── backend/   (Laravel API)
└── frontend/  (Nuxt App)

````

---

# Backend Setup (Laravel)

## 1. Install dependencies

```bash
cd backend
composer install
````

---

## 2. Environment setup

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set database config:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_db_name
DB_USERNAME=root
DB_PASSWORD=
```

---

## 3. Generate app key

```bash
php artisan key:generate
```

---

## 4. Run migrations

```bash
php artisan migrate
```

---

## 5. Start server

```bash
php artisan serve
```

API will run at:

```
http://127.0.0.1:8000
```

---

## API Endpoints

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| GET    | /api/posts      | Get all posts |
| POST   | /api/posts      | Create post   |
| DELETE | /api/posts/{id} | Delete post   |

---

# Frontend Setup (Nuxt 4)

## 1. Install dependencies

```bash
cd frontend
npm install
```

---

## 2. Start development server

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

# API Connection

Frontend communicates with backend via:

```
http://127.0.0.1:8000/api/posts
```

Make sure Laravel server is running before using frontend.

---

# Key Concepts Used

* REST API design
* Nuxt composables
* Reactive state management
* Laravel Form Requests (validation)
* CRUD operations