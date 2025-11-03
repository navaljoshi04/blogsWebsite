import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      trim: true,
      required: true,
    },
    subheading: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
      minlength:5,
      
    },
    file:{
        type:[String],
        required:false, 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog",blogSchema);

export default blogModel