FROM node:lts-alpine

LABEL version="1.0"
LABEL description="projet de la pharmacie" 

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200
EXPOSE 9876

CMD [ "ng", "serve", "--disable-host-check", "--host", "0.0.0.0" ]

