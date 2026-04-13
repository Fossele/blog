const  mongoose  = require("mongoose");
const express = require("express");
const app = express();


const mongoDB = "mongodb://127.0.0.1/blog_database";

const Schema = mongoose.Schema;

const myModelSchema = new Schema(
    {title:String, content:String,}
);

const myModel = mongoose.model("myModel",myModelSchema);




async function main(){
    await mongoose.connect(mongoDB);
}
main().catch((err)=>console.log(err));

app.get("/apik/", (req, res)=>{
    res.send("hello");
});

app.listen(3000, ()=>{
    console.log("Running on port localhost:3000")
})