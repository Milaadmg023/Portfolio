import { Post } from "../utils/db.js"
const post = new Post()
export async function getMessages(req, res) {
    res.json({ ok: true })
}

export async function postMessage(req, res) {
    const msg = req.body
    const new_message = await post.post_Message(msg)
    res.json(new_message)
}