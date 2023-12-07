# Nom du projet : The RetroGameHub-backend_DWWM

## Description

The Retro Game Hub est une application conçue pour permettre aux amateurs de jeux vidéo rétro de gérer leurs collections de jeux. Elle offre une interface intuitive pour ajouter, organiser et parcourir des jeux, des collections et des plateformes.

## Technologies Backend 

- **Node.js** : Utilisé pour le runtime de l'application. 
- **Express.js** : Framework web pour créer l'API REST. 
- **Sequelize** : ORM pour gérer les interactions avec la base de données PostgreSQL. 
- **PostgreSQL** : Base de données pour stocker les données des utilisateurs, des jeux, des collections et des plateformes. 
## Fonctionnalités Backend 

- **Authentification des utilisateurs** : Inscription, connexion et gestion des profils utilisateur.
- **Gestion des collections** : Les utilisateurs peuvent créer, modifier et supprimer des collections de jeux. 
- **Gestion des jeux et plateformes** : Ajout et organisation de jeux dans des collections spécifiques et gestion des plateformes de jeux.
- **Recherche et filtrage avancés** : Fonctionnalités de recherche pour parcourir les jeux et les développeurs.

## Déploiement

- **Local** : L'application s'exécute localement sur `http://localhost:8000`.
- **Production** : se positionner sur la branch 'development'

## Démarrage rapide

Pour exécuter le projet en local, suivez ces étapes :

1. Clonez le dépôt :

 ```bash
 git clone https://example.com/your-repo.git
 ```

2. Installez les dépendances :

```bash
cd your-repo 
npm install
```

Créez un fichier `.env` à la racine du projet pour configurer les variables d'environnement.

Assurez-vous que PostgreSQL est configuré et en cours d'exécution.

Exécutez les migrations Sequelize pour initialiser la base de données :

```bash
npx sequelize-cli db:migrate
```

3. Lancez le serveur :

```bash
npm run dev
```
4. Utiliser la commande suivante pour lancer les tests:

```bash
 NODE_ENV=developpement npm run test
```
