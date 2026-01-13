const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/product")
.then(()=>console.log("Connected to the database sucessfully"))
.catch(err=>console.log(err));

const productSchema=new mongoose.Schema({
    pid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    }
});

app.get('/',(req,res)=>{
    res.send("Hai from server backend");
})

const product=mongoose.model("products",productSchema);


app.post('/products',async(req,res)=>{
    await product.create(req.body);
    res.json("data posted sucessfully");
});

app.get("/products",async(req,res)=>{
    const result=await product.find();
    res.json(result);
});

app.delete("/products/:id",async(req,res)=>{
    try{
    await product.findByIdAndDelete(req.params.id);
    res.json({message:"deleted sucessfully"});
    }
    catch(err){
        res.json({message:"Enter valid id"});
    }
})
app.listen(3000,()=>{
    console.log("Server is running at the port 3000");
});

