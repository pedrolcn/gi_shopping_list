# Base Image
FROM node:9.6.1

# Set workdir
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@6.0.3

# add app
COPY . /usr/src/app

# Start app
CMD ng serve --host 0.0.0.0