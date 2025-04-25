# HatStore API - Service Produits

Ce service gère les opérations CRUD pour les produits du site e-commerce HatStore.

## Prérequis

- Node.js (v14 ou supérieur)
- PostgreSQL (v12 ou supérieur)

## Installation

1. Cloner le dépôt
2. Installer les dépendances :
   ```
   npm install
   ```
3. Créer un fichier `.env` à la racine du dossier `backend` avec les configurations suivantes :
   ```
   # Configuration du serveur
   PORT=8080
   CLIENT_ORIGIN=http://localhost:3000

   # Configuration de la base de données
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=votre_mot_de_passe
   DB_NAME=hatstore
   DB_FORCE_RESYNC=false
   ```

4. Créer une base de données PostgreSQL nommée `hatstore`

## Démarrage

Pour démarrer le serveur en mode développement :
```
npm run dev
```

Pour démarrer le serveur en mode production :
```
npm start
```

## API Endpoints

### Produits

- `GET /api/products` - Récupérer tous les produits
  - Paramètres de requête optionnels :
    - `name` - Filtrer par nom (recherche partielle)
    - `category` - Filtrer par catégorie

- `GET /api/products/:id` - Récupérer un produit par son ID

- `POST /api/products` - Créer un nouveau produit
  - Corps de la requête :
    ```json
    {
      "name": "Nom du produit",
      "description": "Description du produit",
      "price": 29.99,
      "category": "Catégorie",
      "imageUrl": "url/de/l/image.jpg",
      "stock": 100,
      "isAvailable": true,
      "sizes": ["S", "M", "L"],
      "colors": ["Noir", "Blanc"]
    }
    ```

- `PUT /api/products/:id` - Mettre à jour un produit existant

- `DELETE /api/products/:id` - Supprimer un produit

- `DELETE /api/products` - Supprimer tous les produits (à utiliser avec précaution) 