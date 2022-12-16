# How to start ?

1. npx create-react-app YOUR_PROJECT_NAME oder .
2. import {useState, useEffect} from 'react'
3. npm install react-dotenv
4. Erstelle .env Datein in der höchsten Ordnerebene
5. Api Key in .env Datein speichern mit REACT_APP_Dein_beliebiger_Name = YOUR_API_KEY
6. Variable/Konstate mit dem Wert process.env.REACT_APP_Dein_beliebiger_Name
7. Füge die .env Datei zu deiner .gitignore Datein hinzu

# Was danach ?

1. Jetzt kannst Du überdeinen Variablen Namen den Api-Key ausgeben
2. Starte dein Projekt mit npm run start
3. Jetzt kannst Du deinen Fetch + der von Dir deklarierten Variable ausführen

# Wie auf Netlify hosten ?

1. Account bei Netlify erstellen
2. Auf 'Add new Site' --> 'Import an existing project'
3. GitHub auswählen und autorisieren
4. Deloy Log beobachten und ggfs debuggen

# Wie kann ich meinen Api-Key auf Netlify verwenden ?

1. Wähle dein Projekt aus
2. Gehe auf 'Site settings' --> Environment variables
3. Add a variable und folge den Anweisungen
