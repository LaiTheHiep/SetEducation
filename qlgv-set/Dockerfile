FROM node:12.6.0 as development
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./build /usr/src/app
# RUN apt update
RUN apt install git
RUN npm i -g git+https://github.com/InnerPeace080/spa-http-server.git
CMD http-server . -p 80 --gzip -d false --push-state

FROM node:12.6.0-alpine as production
WORKDIR /usr/src/app
COPY --from=development /usr/src/app .
RUN apk update
RUN apk add git
RUN npm i -g git+https://github.com/InnerPeace080/spa-http-server.git
CMD http-server . -p 80 --gzip -d false --push-state
