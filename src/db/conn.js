const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://priyobroto:priyobroto@cluster0.5fojxl0.mongodb.net/feedbackform?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log(`Connection successful`);
}).catch((e)=>{
    console.log(e)
})