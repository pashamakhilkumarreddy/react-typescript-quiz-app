# `docker build --rm --build-arg "NODE_VERSION=12.18.3-alpine3.12" -f Dockerfile .`
FROM node:12.18.3-alpine3.12

RUN apk update && \
  apk upgrade && \
  apk add netcat-openbsd && \
  apk add --no-cache bash

ENV NODE_ENV production

WORKDIR /app

COPY . /app

RUN npm install 
# RUN npm ci --only=production

RUN npm prune --production

RUN chown -R node:node ./

USER node

EXPOSE 5000

CMD ["npm", "start"]