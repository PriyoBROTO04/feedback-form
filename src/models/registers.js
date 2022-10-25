const mongoose= require("mongoose");

const feedbackSchema=new mongoose.Schema({
    mood : {
        type : String
    },
    standout : {
        type : String
    },
    lacking : {
        type : String
    },
    suggest : {
        type : String
    },
    ID : {
        type : String
    },
    username : {
        type : String
    },
    yourserver : {
        type : String
    },
    
})


const Resgister = new mongoose.model("Feedback" , feedbackSchema);
module.exports= Resgister;