 # syntax=docker/dockerfile:1
 FROM node:13.12.0-alpine

 WORKDIR /task-manager-frontend
 
 ENV PATH /task-manager-frontend/node_modules/.bin:$PATH
 
 COPY package.json ./
 COPY package-lock.json ./

 RUN npm install --silent
 RUN npm install react-scripts@3.4.1 -g -s-silent
 
 COPY . ./
 
 CMD ["npm", "start"]
