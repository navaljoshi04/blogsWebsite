import blogModel from "../models/blogModel.js";

const create = async(req,res)=>{
    try{
          const {heading,subheading,content} = req.body;
        const imagePath = req.file?.path ?? null;
          if(!heading || !subheading || !content) {
            return res.status(400).json({message:"All fields are required"})
          }

          const data = await blogModel.create({
            heading,subheading,content,image:imagePath,user:req.user._id,
          })

          return res.status(200).json({message:"Blog Created Successfully",blog:{
            heading:data.heading,
            subheading:data.subheading,
            content:data.content,
            image:data.image,
            user:data.user,
          }})
                  
    }
    catch(err){
        return res.status(400).json({message:"ERROR",error:err.message})
    }
}

export default create