# dockerfile for my api
# based on node because everyone uses node right?
FROM node:18-alpine

# make a folder
WORKDIR /app

# copy package.json first (someone said this is faster?)
COPY package.json .

# install stuff
RUN npm install

# copy everything else
COPY . .

# the port
EXPOSE 10000

# start the server
CMD ["node", "index.js"]
