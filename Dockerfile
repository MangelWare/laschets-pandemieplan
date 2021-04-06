FROM node:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/


WORKDIR /usr/src/app
ADD . /usr/src/app

EXPOSE 8080

CMD ["node", "app.js"]
