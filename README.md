Cahier des Charges – Site E-Commerce "Hatstore"
1. Présentation du projet
•
Nom du site : Hatstore
•
Objectif : Vente en ligne de chapeaux pour tous types de clients (mode, protection solaire, accessoires, etc.)
•
Technologies :
o
Frontend : React.js
o
Backend : Node.js + Express + typescript + tailwindcss + vite
o
Base de données : MongoDB (ou autre NoSQL/SQL au besoin)
o
Paiement : Intégration de carte bancaire (via Stripe par ex.) et PayPal
2. Fonctionnalités principales
2.1. Utilisateur
•
Création de compte / Connexion / Déconnexion
•
Gestion de profil (adresse, mot de passe, historique d’achat)
•
Recherche de produits (par nom, catégorie, prix, etc.)
•
Navigation par catégories de chapeaux
•
Affichage des détails produit (photos, description, prix, stock)
•
Ajout au panier / Suppression / Modification de quantité
•
Paiement par carte bancaire ou PayPal
•
Suivi de commande
•
Email de confirmation après achat
2.2. Admin
•
Connexion sécurisée à l’interface admin
•
Ajout / modification / suppression de produits
•
Gestion du stock
•
Visualisation des commandes
•
Gestion des utilisateurs
3. Pages principales du site
1.
Accueil : Mise en avant des collections, promotions, nouveautés
2.
Catalogue / Boutique : Liste des chapeaux avec filtres (taille, couleur, style, prix…)
3.
Page produit : Description complète, photos, bouton “ajouter au panier”
4.
Panier : Liste des articles avec modification possible
5.
Paiement : Formulaire sécurisé, choix de méthode de paiement
6.
Connexion / Inscription
7.
Mon compte : Informations personnelles, historique d’achats
8.
Espace admin : Gestion produits, commandes, utilisateurs
9.
Page 404 / erreur : Gestion des routes inexistantes
10.
CGV / Mentions légales / Politique de retour
4. Contraintes techniques
•
Responsive design (mobile, tablette, desktop)
•
Sécurité des données personnelles (RGPD)
•
Intégration HTTPS
•
Paiement sécurisé (SSL, tokenisation)
•
Performance optimisée (lazy loading, cache)
5. Pistes d’évolutions
•
Ajout d’un blog (mode, tendances, etc.)
•
Module de recommandation produit
•
Système de points de fidélité
•
Intégration Instagram / réseaux sociaux
•
Multilingue
✅ Étape 1 : Préparation du projet
1.
Définir les besoins fonctionnels clairement → Tu viens de le faire avec le cahier des charges
2.
Créer l’arborescence des pages → Liste les pages côté client et admin, comme :
bash
CopierModifier
/ → Accueil /boutique → Catalogue des chapeaux /produit/:id → Page produit /panier → Panier /paiement → Paiement /connexion → Login /inscription /compte → Profil client /admin → Espace admin
🚧 Étape 2 : Initialiser le projet
Frontend (React)
1.
Crée ton app React :
bash
CopierModifier
npx create-react-app spotlight-frontend
2.
Installe les dépendances utiles (exemples) :
bash
CopierModifier
npm install react-router-dom axios redux react-redux
3.
Configure le routeur (react-router-dom) avec les pages de base.
Backend (Node.js)
1.
Initialise un projet Node :
bash
CopierModifier
npm init -y
2.
Installe les dépendances de base :
bash
CopierModifier
npm install express mongoose dotenv cors nodemon
3.
Crée un serveur de base (server.js) avec des routes simples :
js
CopierModifier
app.get('/', (req, res) => { res.send('API Spotlight en ligne') });
🧱 Étape 3 : Construire progressivement
Backend
•
Authentification (JWT + bcrypt)
•
Modèle Produit, Utilisateur, Commande
•
Routes REST API :
o
GET /produits, GET /produits/:id
o
POST /commande, POST /utilisateur/login, etc.
Frontend
•
Composants : Header, Footer, CardProduit, Panier, Formulaire de paiement
•
Pages avec React Router
•
Liaison avec l’API via Axios
💳 Étape 4 : Intégrer les paiements
•
Stripe pour cartes bancaires
•
PayPal (via leur SDK JavaScript)
🧪 Étape 5 : Tests et sécurité
•
Valider chaque fonction côté front et back
•
Protéger les routes admin (middleware)
•
Gérer les erreurs serveur / client
🚀 Étape 6 : Déploiement
•
Backend → Render / Railway / VPS
•
Frontend → Vercel / Netlify
•
Base de données → MongoDB Atlas (ou autre)