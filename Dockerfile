# Usa a imagem oficial do Node.js como base
FROM node:18.20.7

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Expõe a porta usada pela aplicação
EXPOSE 4000

# Comando para iniciar a aplicação
CMD ["npm", "run", "serve:ssr:market-manager"]
