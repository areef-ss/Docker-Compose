FROM node:20-alpine

WORKDIR /app

# Copy only what you need to install dependencies first (good for caching)
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY prisma ./prisma



# 🔥 Make sure to copy the Prisma schema folder


# Set env vars for Prisma
ENV DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres
RUN echo $DATABASE_URL

# Run Prisma commands
RUN npx prisma migrate dev
RUN npx prisma generate

# Copy the rest of the app
COPY . .

EXPOSE 3000

# Correct CMD
CMD ["npm", "run", "dev"]
