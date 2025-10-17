## Manual Setup
1. Clone the repo
2. Intsall node js locally
3. install dependencies
4. start the DB locally
    - install docker
    - run `docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
5. change the database url in .env file
6.npx prisma migrate dev
7. npx prisma generate
8. npm run dev


## Docker Setup

---Install docker
--- Start postgress
--- run `docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
--- change the database url in .env file
--- Build the image -'docker build -t docker-compose .'
--- Run the image -'docker run -p 3000:3000 docker-compose'


## Docker-compose
---Install docker,docker-compose
--- Start postgress
--- run `docker-compose up`
