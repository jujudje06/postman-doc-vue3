# develop stage
FROM node:14.20.0 as develop-stage
WORKDIR /app

COPY . .

RUN yarn global add @vue/cli @quasar/cli
RUN yarn install

CMD /bin/sh

# build stage
FROM develop-stage as build-stage
RUN yarn install
RUN yarn run build

# production stage
FROM nginx:1.23.1-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
