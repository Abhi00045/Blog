import Post from '../models/post.model.js';



// Getting a All posts
//res.json(post)==> send the data in json

export const getPosts = async (req,res)=>{
    const posts = await Post.find();
    res.status(200).json(posts);
}
// Getting a single post through its slug from req.params.slug
//res.json(post)==> send the data in json

export const getPost = async (req,res)=>{
    const post = await Post.findOne({slug : req.params.slug});
    res.status(200).json(post);
}
// Posting a post through req.body =>{where this post has been posted from body of file}
//   where we reqthe post from body we are saving/posting in our Db through .save()
//res.json(post)==> send the data in json
export const createPost = async (req,res)=>{
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.json(post)
}
// deleteing the post through by its id where method called  findbyIdAndDelete(req.params.id)
export const deletePost = async (req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("post has been deleted");
}

