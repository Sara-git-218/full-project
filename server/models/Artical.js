const mongoose=require("mongoose")
const articlSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        default:"New-Artical"
    },
    active:{
        type:Boolean,
        default:false
    }
},{
timestamps:true
})
module.exports=mongoose.model('Artical',articlSchema)