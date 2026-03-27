# sai-web-canvas

A React + Vite web application styled with Tailwind CSS.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion
- React Router DOM
- Lucide React / React Icons

## Local Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `dist/` folder.

## Docker Deployment (Ubuntu)

### Build Image

```bash
docker build -t sai-web-canvas .
```

### Run Container

```bash
docker run -d -p 5000:5000 sai-web-canvas
```

Access at `http://localhost:5000`

## AWS EC2 (Ubuntu) Deployment

1. SSH into your EC2 instance

2. Install Docker:
```bash
sudo apt-get update
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

3. Clone your project:
```bash
git clone <your-repo-url>
cd sai-web-canvas
```

4. Build and run:
```bash
sudo docker build -t sai-web-canvas .
sudo docker run -d -p 5000:5000 sai-web-canvas
```

Access at `http://<your-ec2-public-ip>:5000`

> Make sure port **5000** is open in your EC2 Security Group inbound rules.

## Kodecola (Ubuntu Server) Deployment

### Option 1 — With Docker

1. Install Docker:
```bash
sudo apt-get update
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

2. Clone your project:
```bash
git clone <your-repo-url>
cd sai-web-canvas
```

3. Build and run:
```bash
sudo docker build -t sai-web-canvas .
sudo docker run -d -p 5000:5000 sai-web-canvas
```

Access at `http://<kodecola-server-ip>:5000`

### Option 2 — Without Docker (Direct)

1. Install Node.js and Nginx:
```bash
sudo apt-get update
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs nginx
```

2. Clone and build:
```bash
git clone <your-repo-url>
cd sai-web-canvas
npm install
npm run build
```

3. Serve with Nginx:
```bash
sudo cp -r dist/* /var/www/html/
sudo systemctl start nginx
sudo systemctl enable nginx
```

Access at `http://<kodecola-server-ip>:80`

> Make sure port **5000** (Docker) or **80** (Direct) is open in Kodecola firewall/security settings.
