FROM node:lts-alpine AS build

WORKDIR /app

COPY . .

RUN npm install --ignore-scripts
RUN npm install -g --ignore-scripts @angular/cli

RUN  ng build 

# the final 

LABEL version="1.0"
LABEL description="projet de la pharmacie" 

FROM httpd:2.4-alpine

COPY  --from=build ./ /usr/local/apache2/htdocs/




