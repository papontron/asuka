FROM node
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm i -g nodemon
RUN npm i -g gulp
RUN npm i -g prettier
COPY . .
CMD [ "npm","run","dev" ]