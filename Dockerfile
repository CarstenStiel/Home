# Basisimage festlegen
FROM node:14-alpine

# Arbeitsverzeichnis festlegen
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# App-Code kopieren
COPY . .

# App bauen
RUN npm run build

# App-Startpunkt definieren
CMD ["npm", "run", "serve"]