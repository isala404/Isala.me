FROM node:lts as builder
WORKDIR /var/www/Isala.me
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /var/www/Isala.me/build /var/www/Isala.me
COPY nginx.conf /etc/nginx/conf.d/default.conf