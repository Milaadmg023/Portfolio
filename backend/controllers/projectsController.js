import Get from "../utils/db.js";
const get = new Get();
export default async function ProjectsController(req, res) {
    const projects = await get.getProjects();
    res.json(projects);
}