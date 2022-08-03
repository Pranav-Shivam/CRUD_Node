const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");
dotenv.config();
//connect mongodb

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true,useUnifiedTopology: true},
    ()=>console.log("Connected to Database")
);
//Import Routers
const productRouters=require("./routes/product");

//Middleware
app.use(express.json());
app.use(cors());


//Router Middleware
app.use("/api/products",productRouters);

app.listen(4000,()=>console.log("server up and running on port 4000"));