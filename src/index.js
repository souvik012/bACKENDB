// require('dotenv').config({path: './env'})

import dotenv from "dotenv"


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})



connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running : ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log("MONGODB connection failed !! ",err);
    
})

// function connectDB(){}


 
 




/*
import express from "express"
;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , ()=>{
            console.log("ERROR: ", error);
            throw error
            
        }) 
        
        app.listen( process.env.PORT,()=>{
            console.log(`App is lidtening on port : ${process.env.PORT}` );

            
        })

    } catch (error) {
        console.log("ERROR: ",error);
        throw err
    }
} )()

*/