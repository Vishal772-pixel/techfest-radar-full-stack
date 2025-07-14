import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
connectDb();

dotenv.config();


app.get('/',(req,res)=>{res.send("Server is running successfully!")});


        
