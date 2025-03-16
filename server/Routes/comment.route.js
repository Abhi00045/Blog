import express from 'express'
const router = express.Router()

router.get("/", (req, res) => {
    res.send("comment route")
})
export default router