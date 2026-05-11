# Build stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM pierrezemb/gostatic
COPY --from=build /app/dist /srv/http/
CMD ["-port","8080","-https-promote", "-enable-logging"]
