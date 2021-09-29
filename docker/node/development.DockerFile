FROM node:14.18.0

COPY ["./package.json", "/usr/src/"]

WORKDIR /usr/src

RUN cd /usr/src/; npm install -g npm@7.24.1

RUN npm install -g node-gyp

RUN npm install --save --force

COPY ["./", "/usr/src/"]

EXPOSE 3000

CMD ["npm", "run", "start"]