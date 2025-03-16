import express from 'express'
import useRouter from './Routes/user.route.js'
import postRouter from './Routes/post.route.js'
import commentRouter from './Routes/comment.route.js'

const app = express()

app.use("/user", useRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(8171, () => {
    console.log('Server is running on port 8171');
})