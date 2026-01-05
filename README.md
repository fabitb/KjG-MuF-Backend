# KjG-MuF-Backend

Backend API for the KjG-MuF application built with TypeScript, Express.js, and MongoDB.

## Docker Deployment

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) or Docker Engine + Docker Compose
- Docker Compose version 1.29+ (for profiles support)

### Quick Start

#### Development Environment

1. **Copy environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your configuration:**
   ```bash
   # Required: Set your authentication token
   TOKEN=your_dev_token_here

   # Optional: Adjust port if 3000 is in use
   PORT=3000
   ```

3. **Start development environment:**
   ```bash
   docker-compose --profile dev up
   ```

   The application will be available at `http://localhost:3000/api`

   Code changes will automatically reload (hot reload via nodemon).

4. **Stop development environment:**
   ```bash
   docker-compose --profile dev down
   ```

#### Production Environment

1. **Ensure `.env` is configured for production:**
   ```bash
   # Use a strong, random token
   TOKEN=<use-a-cryptographically-secure-random-token>

   # Enable MongoDB authentication (recommended)
   MONGO_INITDB_ROOT_USERNAME=admin
   MONGO_INITDB_ROOT_PASSWORD=<secure-password>
   ```

2. **Build and start production environment:**
   ```bash
   docker-compose --profile prod up --build -d
   ```

3. **View logs:**
   ```bash
   docker-compose logs -f backend-prod
   ```

4. **Stop production environment:**
   ```bash
   docker-compose --profile prod down
   ```

### Data Persistence

MongoDB data is stored in Docker volumes and persists across container restarts:

- **Volume name:** `kjg-muf-backend_mongodb_data`
- **Location:** Inspect with `docker volume inspect kjg-muf-backend_mongodb_data`
