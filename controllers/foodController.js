
import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add fooditem

const addFood = async (req,res)=>{

    let image_filename  = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category,

    })
    try{
        await food.save();
        return res.json({success:true,message:"Food Added Successfully"})
    }catch(error){
        console.log(error);
        return res.json({success:false,message:"Error"})
    }

}

const listFood = async (req,res) =>{

    try { 
        
        const foods = await foodModel.find({});
        // console.log(foods);
        res.json({success:true,data:foods})
            
        
       } 
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Unable To Fetch"})
        
    }

}

const removeFood = async (req,res) =>{

    try {

        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,() => {});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
        
    } catch (error) {
        res.json({success:false,message:"Unable to Delete Food Item"})
        
    }

}

export {addFood , listFood, removeFood};
