import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prismaClient = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const data =await prismaClient.users.findMany();
  res.json(data);
});

app.post("/", async (req, res) => {
  await prismaClient.users.create({ // ✅ Capital U
    data: {

      username: Math.random().toString(36).substring(7),
      password: Math.random().toString(36).substring(7),
    },
  });
  res.json({ message: "User created successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
