# Auth Service - Hatstore

Ce service gère l'authentification des utilisateurs de Hatstore.

## Fonctionnalités
- Inscription d'utilisateurs.
- Connexion et génération de tokens JWT.
- Vérification de l'admin pour autoriser certaines actions.

## Technologies
- Node.js
- Express
- PostgreSQL (avec SQL pur)
- bcryptjs
- jsonwebtoken
- dotenv
- nodemon

## Installation

1. Installer les dépendances :
    ```bash
    npm install express dotenv bcryptjs jsonwebtoken cors pg
    npm install --save-dev nodemon
    ```

2. Configurer le fichier `.env` :
    ```
    JWT_SECRET=UnSuperSecretTresLongEtSecurise
    PORT=5001
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=1234
    DB_NAME=HatStore
    
    ```

3. Lancer le serveur :
    ```bash
    npm run server
    ```

## Endpoints
- `POST /api/auth/register` : Inscription.
- `POST /api/auth/login` : Connexion.

## Notes
- Utilisation de SQL pur pour accéder à PostgreSQL.
- Les tokens JWT sont envoyés dans la réponse après connexion.

