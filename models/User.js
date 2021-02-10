  
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  admin:{type:Boolean,
         default:false,
                       },
  Mobile_Number:{type:String},
    Gaurdian:{type:String},
    CNIC:{type:Number},
    date: String,
  Gender: String,
  religion: String,
  servant: String,
  disability: String,
  Center: String,
  district:String,
  Tulka:String,
  domicile_date:String,
  place_of_posting:String,
  Adress:String,
  Adress_cnic:String

    
  
  

});

export default mongoose.model("User", userSchema);