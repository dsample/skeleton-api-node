FROM mhart/alpine-node:latest

RUN mkdir /app
WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]
CMD [ "test" ]
