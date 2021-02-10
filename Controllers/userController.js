import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModal from '../models/User.js'
const secret="123ret"
export const CreateUser =async(req,res)=>{
    res.send('tm ho user')
}

export const RegisterUser =async(req,res)=>{
    const { email, password, name } = req.body;
  console.log(email, password,name)
    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModal.create({ email, password: hashedPassword, name});
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
}

export const  loginuser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist with this email" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Incorrect Password" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });

  }
};


export const UpdateUser=async(req,res)=>{
  const{values,_id} =req.body
  console.log(values)
 
  const user = await UserModal.findById(_id)
  if(user){
    user.Mobile_Number=values.Mobile_Number
    user.Gaurdian=values.Gaurdian
    user.CNIC=values.CNIC
    user.date=values.date
    user.disability=values.disability
    user.Gender=values.Gender
    user.Center=values.Center
    user.district=values.district
    user.Adress=values.Adress
    user.Adress_cnic=values.Adress_cnic
    user.Tulka=values.Tulka
    user.place_of_posting=values.place_of_posting
    user.domicile_date=values.domicile_date
  }
  
  const updatedUser = await user.save()

}