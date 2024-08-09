# Use uma imagem base oficial do Node.js
FROM node:20.11.0

# Define o diretório de trabalho dentro do container
WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    libtool \
    autoconf \
    automake \
    && rm -rf /var/lib/apt/lists/*

# Copia o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Instala globalmente o TypeScript e o ts-node (para desenvolvimento)
RUN npm install

# Copia o restante do código do projeto para dentro do container
COPY . .

RUN npm run build
# Exponha a porta que o backend está utilizando
EXPOSE 5000

# Comando para iniciar o servidor usando o build compilado
CMD ["node", "dist/server.js"]
