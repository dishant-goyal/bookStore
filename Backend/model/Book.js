import mongoose , {Schema} from "mongoose";


const bookSchema=Schema({
    name:{
        type:String,
        required:[true,"Book Name is required"]
    },
    title:{
        type:String,
        required:[true,"Book Title is required"]
    },
    price:{
        type:Number,
        required:[true,"Book Price is required"]
    },
    category:{
        type:String,
        required:[true,"Book Category is required"]
    },
    image:{
        type:String,
    } 
})

export const Book =mongoose.model("Book",bookSchema)