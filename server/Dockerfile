FROM node:12.18.3-alpine3.12

RUN apt-get update && \
  apt-get -y install netcat && \
  apt-get clean

WORKDIR /app

COPY . /app

RUN npm install 
# RUN npm ci --only=production

RUN npm prune --production

RUN chown -R node:node ./

# 
USER node

EXPOSE 5000

CMD ["npm", "start"]