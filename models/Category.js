import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name: { type : String , required : true },
    slug : { type : String , required : true},
    image : { type : String , required : true },
    featured : { type : Boolean , required : true },
    description : { type : String , required : true}
},{ timestamps: true });

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;
