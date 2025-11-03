import blogModel from "../models/blogModel.js";


const create = async(req,res)=>{
    try{
          const {heading,subheading,content} = req.body;
       
          if(!heading || !subheading || !content) {
            return res.status(400).json({message:"All fields are required"})
          }
            const filePaths = req.files?.map((file) => file.path) ?? [];

            // if (filePaths.length === 0) {
            //   return res
            //     .status(400)
            //     .json({ message: "At least one file is required" });
            // }

          const data = await blogModel.create({
            heading,
            subheading,
            content,
            file: filePaths,
            user: req.user._id,
          });

             const blogUser = await data.populate("user", "userName");

          return res.status(200).json({
            message: "Blog Created Successfully",
            blog: {
              heading: data.heading,
              subheading: data.subheading,
              content: data.content,
              file: data.file,
              user: blogUser.user.userName,
            },
          });
                  
    }
    catch(err){
        return res.status(400).json({message:"ERROR",error:err.message})
    }
}

const deleteBlog = async(req,res)=>{
 try{
      const userId = req.user._id;
      const {Id} = req.params;

      const blogDelete = await blogModel.findOneAndDelete({_id:Id , user:userId})
      return res.status(200).json({message:"Blog Deleted Successfully"});
 }
 catch(err){
    return res.status(400).json({message:"ERROR",error:err.message});
 }
}

export { create, deleteBlog };