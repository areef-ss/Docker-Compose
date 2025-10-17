from node:20-alpine
WORKDIR /app
COPY package.json ./package.json
copy package-lock.json ./package-lock.json

RUN npm install
COPY . .


ENV DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

RUN npx prisma migrate dev
RUN npx prisma generate
RUN npx run build

EXPOSE 3000

cmd ["npm","run","dev"]

