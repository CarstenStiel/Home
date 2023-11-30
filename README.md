# Home

## Project Structure

1. **[.github](.github):**
   - Contains GitHub Actions workflows and configurations.

2. **[public](public):** 
   - Houses public assets and files.

3. **[src](src):**
   - This directory holds the source code of the Vue project.
   - Refer to the [src README.md](src/README.md) for more details on specific components, utilities, or folders.

## Installations

Before you start, ensure the following software is installed:

1. **Node.js and npm:**
    - Download "Node.js" and "npm" from the official website: [Node.js Downloads](https://nodejs.org/en/download/current).
    - Follow the installation instructions provided on the website.

2. **Vue CLI:**
    - Install Vue CLI globally by running the following command in the terminal:
      ```bash
      npm install -g @vue/cli
      ```

3. **Docker:**
    - Download "Docker Desktop" from [Docker's official website](https://docs.docker.com/get-docker/).
    - Follow the instructions for a smooth installation, including considerations for WSL2 if applicable.

### First Start

1. Clone the repository:
   ```bash
   git clone git@github.com:CarstenStiel/Home.git
2. If needed, navigate to the project directory:
      ```bash
      cd Home
3. Install dependencies: 
   ```bash
   npm install
## Commands good to know
The following commands are used for Windows Powershell
1. ***Docker:***
   - Docker compose up:
      ```bash
      docker compose up
   - delete everything (images and containers):
       ```bash
       docker system prune -a

## Project setup

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
