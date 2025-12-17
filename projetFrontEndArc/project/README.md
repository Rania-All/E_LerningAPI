# EduLearn - Plateforme E-Learning Frontend

Interface moderne pour la plateforme d'apprentissage en ligne développée avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

- **Catalogue de cours** - Parcourir et rechercher des cours avec filtres par niveau et catégorie
- **Détails des cours** - Affichage complet avec description, instructeur, modules et inscription
- **Mes cours** - Suivi de progression des cours inscrits
- **Certificats** - Consultation et téléchargement des certificats obtenus
- **Profil utilisateur** - Gestion des informations personnelles et activité

## Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.tsx      # Navigation principale
│   └── CourseCard.tsx  # Carte de cours
├── views/              # Pages principales
│   ├── Home.tsx        # Page d'accueil
│   ├── Courses.tsx     # Catalogue de cours
│   ├── CourseDetail.tsx # Détails d'un cours
│   ├── MyCourses.tsx   # Cours de l'étudiant
│   ├── Certificates.tsx # Certificats
│   └── Profile.tsx     # Profil utilisateur
├── types/              # Types TypeScript
│   └── index.ts
├── data/               # Données de démonstration
│   └── mockData.ts
├── config/             # Configuration
│   └── api.ts          # Client API
└── App.tsx             # Composant principal
```

## Configuration

1. Créer un fichier `.env` à la racine :
```bash
VITE_API_BASE_URL=http://localhost:8080
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer en mode développement :
```bash
npm run dev
```

## Connexion au Backend Spring Boot

Le fichier `src/config/api.ts` contient un client API prêt à communiquer avec votre backend Spring Boot. Les endpoints attendus sont :

- `GET /courses` - Liste des cours
- `GET /courses/:id` - Détails d'un cours
- `GET /instructors` - Liste des enseignants
- `GET /students` - Liste des étudiants
- `GET /students/:id` - Détails d'un étudiant
- `POST /enrollments` - Inscription à un cours
- `GET /certificates` - Certificats d'un étudiant
- `GET /certificates/:id/download` - Téléchargement PDF

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icônes)

## Prochaines Étapes

- Connecter l'API au backend Spring Boot
- Ajouter l'authentification
- Implémenter la lecture vidéo
- Intégrer le téléchargement des certificats PDF
