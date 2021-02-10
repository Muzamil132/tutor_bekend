import PostModal from '../models/PostModal.js'


export const PostCreate =async(req,res)=>{

    const {Project,Post,description,date}=req.body
    console.log(Project,Post,description,date)
     const newPost =new PostModal({Project,Post,description,date})
     try {
        await newPost.save();

        res.status(201).json(newPost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    

}

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostModal.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}