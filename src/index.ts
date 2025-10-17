import { PrismaClient } from "@prisma/client";
import express from "express";

const app=express();
const prismaClient=new PrismaClient();


app.use(express.json());


app.get("/",async(req,res)=>{
    const data= await prismaClient.user.findMany()
    res.json({
        data
    })
})

app.post("/",async(req,res)=>{
     await prismaClient.user.create({
        data:{
            username:Math.random().toString(36).substring(7),
            password:Math.random().toString(36).substring(7)
        }
    })
    res.json({
        "message":"post endpoint"
    })

})

app.listen(3000);