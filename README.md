# API Gateway - Hatstore

Le Gateway centralise les requêtes vers les services Auth, Product et Cart.

## Fonctionnalités
- Proxy les requêtes entrantes vers les bons microservices.
- Centralise tous les endpoints en une seule URL publique.

## Technologies
- Node.js
- Express
- Axios
- dotenv
- cors

## Installation

1. Installer les dépendances :
    ```bash
    npm install
    ```

2. Configurer le fichier `.env` :
    ```
    PORT=3000
    AUTH_SERVICE_URL=http://localhost:5001
    PRODUCT_SERVICE_URL=http://localhost:5002
    CART_SERVICE_URL=http://localhost:5003
    ```

3. Lancer le serveur :
    ```bash
    npm run server
    ```

## Routes principales
- `/api/auth/...` : Vers Auth Service
- `/api/products/...` : Vers Product Service
- `/api/cart/...` : Vers Cart Service

## Notes
- L'authentification (vérification JWT) est actuellement désactivée dans l'API Gateway (gérée directement dans les microservices si nécessaire).
- Utilisation d'Axios pour envoyer les requêtes HTTP internes.

