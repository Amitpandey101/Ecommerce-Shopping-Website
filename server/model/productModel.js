const mongoose =require("mongoose")

const productSchema=mongoose.Schema({

    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String


})

const productModel=mongoose.model("product",productSchema);

module.exports=productModel;