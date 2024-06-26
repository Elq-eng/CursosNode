import mongoose, { Schema } from "mongoose";


const categorySchema = new mongoose.Schema({


  name:{
    type: String,
    required: [ true, 'Name is required'],
    unique: true
  },
  avalable:{
    type:Boolean,
    default: false
  },
  user:{
    type: Schema.Types.ObjectId,
    ref:'User',
    require:true
  }, 
});




export const CategoryModel = mongoose.model('Category ', categorySchema)