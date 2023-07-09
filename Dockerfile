FROM node:lts-alpine

LABEL version="1.0"
LABEL description="projet de la pharmacie" 

WORKDIR /app

RUN adduser -Dh /app durant

COPY . .

RUN npm install --ignore-scripts
RUN npm install -g --ignore-scripts @angular/cli

USER durant

EXPOSE 4200
EXPOSE 9876

CMD [ "ng", "serve", "--disable-host-check", "--host", "0.0.0.0" ]

