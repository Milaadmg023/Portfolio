import getBase from "../utils/db.js"
export default async function getAllInfo(req, res) {
    const baseInfo = await getBase()
    res.json(baseInfo)
}
