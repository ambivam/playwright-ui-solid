FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .

CMD ["npx", "playwright", "test"]
