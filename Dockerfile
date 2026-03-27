FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get install -y nginx \
    && apt-get clean

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN cp -r dist/* /var/www/html/

RUN echo 'server { listen 5000; root /var/www/html; index index.html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/sites-available/default

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]
