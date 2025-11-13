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
    
    try{
        const { title, description, content, category, twitterLink, instagramLink, author } = req.body;

    if(!title || !description || !content){
        res.status(400).json({
            success:false,
            message:"all fields required"
        })
    }

    const newPost = new Post({
      title,
      description,
      content,
      category,
      twitterLink,
      instagramLink,
      user: author,
      coverImage: req.file ? req.file.path : "",
    })

    // const post = await newPost.save();
    // res.json(post)

    await newPost.save();

    res.status(200).json({
        success:true,
        message:"published Successfully"
    })
    }catch(err){
        res.status(401).json({
            success:false,
            message:"fetch error"
        })
        console.log(err)
    }

}



// deleteing the post through by its id where method called  findbyIdAndDelete(req.params.id)
export const deletePost = async (req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("post has been deleted");
}

