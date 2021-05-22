FROM node:13.12.0-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-google-login
RUN npm install react-scripts@latest

COPY . ./
CMD ["npm", "start"]
