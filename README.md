# **Desafio Noleak 2024 - Backend**

## **Índice**

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação](#instalação)

## **Sobre o Projeto**

Este é o backend do **Desafio Noleak 2024**, uma aplicação voltada para a geração de mapas de calor baseados em imagens e dados JSON. O projeto foi desenvolvido utilizando Node.js e TypeScript, garantindo um código robusto, escalável e tipado. A API gerencia o upload de arquivos, gera mapas de calor dinamicamente e implementa um mecanismo de cache para otimizar o desempenho.

## **Tecnologias Utilizadas**

- **[Node.js](https://nodejs.org/)** - Ambiente de execução para JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Superconjunto de JavaScript que adiciona tipagem estática
- **[Express](https://expressjs.com/)** - Framework para construir aplicações web com Node.js
- **[Canvas](https://www.npmjs.com/package/canvas)** - Biblioteca para manipulação e criação de gráficos
- **[Multer](https://www.npmjs.com/package/multer)** - Middleware para tratamento de uploads de arquivos

## **Configuração do Ambiente**

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **[Node.js](https://nodejs.org/)** (versão 14 ou superior)
- **[npm](https://www.npmjs.com/)**

### **Variáveis de Ambiente**

O projeto utiliza um arquivo `.env` para gerenciar as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias:

```env
PORT=5000
UPLOAD_DIR=uploads
DOWNLOAD_DIR=downloads
````

### **Instalação**

```env
git clone https://github.com/seu-usuario/heatmap-backend.git
cd heatmap-backend
npm install
npm run dev
````
