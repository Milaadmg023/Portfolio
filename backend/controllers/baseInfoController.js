import {Get} from "../utils/db.js"
const get = new Get()
export default async function getAllInfo(req, res) {
    const baseInfo = await get.getBase()
    res.json(baseInfo)
}
