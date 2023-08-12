FROM node
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm i -g nodemon
RUN npm i -g gulp
RUN npm i -g prettier
RUN npm i -g webpack
RUN npm i -g webpack-cli
RUN npm i concurrently
COPY . .
CMD [ "npm","run","dev" ]