FROM node:10.0.0-alpine as node

WORKDIR /timely

COPY ./frontend/package.json /timely/

RUN npm install

COPY ./frontend /timely/

RUN npm run build --target=production --environment=prod

FROM nginx:alpine

COPY --from=node /timely/dist/ /usr/share/nginx/html

ADD ./docker/frontend/timely.com.conf /etc/nginx/conf.d/default.conf
