
const Data=require("./Constants/Data")
const productModel = require("./model/productModel")


const DefaultData= async()=>{

try{
   
 await productModel.insertMany(Data)
 console.log("data imported successfully")

}catch(err){

    console.log("error while inserting default data",err.message)
}




}
module.exports=DefaultData;