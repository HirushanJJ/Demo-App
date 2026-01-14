FROM node:18-alpine
WORKDIR /app
COPY package.json app.js ./
ENV VERSION=2.0.0
EXPOSE 3000
CMD ["npm", "start"]
