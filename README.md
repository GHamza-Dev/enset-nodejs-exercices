# I - Introduction à ExpressJS

## Exercice 1 : Serveur ExpressJS simple

- Créez un serveur ExpressJS qui répond "Hello World" sur la route principale et affiche la date et l'heure actuelles sur la route "/date".

### Étapes :
1. Initialiser le projet :
   ```js
   mkdir serveur-express
   cd serveur-express
   npm init -y
   npm install express
    ```
2. Créer le fichier index.js :
```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/date', (req, res) => {
  res.send(`Date actuelle : ${new Date().toString()}`);
});

app.listen(PORT, () => {
  console.log(`Serveur sur http://localhost:${PORT}`);
});
```

3. Lancer le serveur
 ```bash
 node index.js
```

## Exercice 2 : Projet ExpressJS structuré

- Créez un projet ExpressJS complet avec la structure de répertoires recommandée et configurez-le pour servir des fichiers statiques et gérer différentes routes.


