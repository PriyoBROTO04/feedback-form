const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://priyobroto:sonu1234?@cluster0.5fojxl0.mongodb.net/discordfeedback",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log(`Connection successful`);
}).catch((e)=>{
    console.log(e)
})