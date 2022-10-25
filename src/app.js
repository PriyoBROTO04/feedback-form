const express=require("express");
const path=require("path");
const app= express();
require("./db/conn");
const Resgister=require("./models/registers")


const port=process.env.PORT || 3000;

const static_path= path.join(__dirname, "../public")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))

app.get("/", (req,res) =>{
    res.send("hello! ")
})
app.post("/register", async (req,res) =>{
    try{
        const registerFeedback = new Resgister({
            mood: req.body.mood,
            standout: req.body.standout,
            lacking: req.body.lacking,
            suggest: req.body.suggest,
            ID: req.body.ID,
            username: req.body.username,
            yourserver: req.body.yourserver
        })

        const registered=await registerFeedback.save();
        res.status(201).sendFile(process.cwd() + '/public/register.html');



    } catch(error){
        res.status(400).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})