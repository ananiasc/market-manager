# Etapa 1: Build do Angular SSR
FROM node:18.20.7 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Imagem final apenas com o necessário para rodar o SSR
FROM node:18.20.7

WORKDIR /app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json /app/package-lock.json ./

# Instala apenas as dependências necessárias para rodar o servidor
RUN npm install --omit=dev

EXPOSE 4000

CMD ["node", "dist/market-manager/server/server.mjs"]
