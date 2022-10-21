const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://priyobroto:<password>@cluster0.5fojxl0.mongodb.net/test",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log(`Connection successful`);
}).catch((e)=>{
    console.log(e)
})