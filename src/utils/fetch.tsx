import details from "./details";

type details = {
    about : string,
    skills : skills[],
    projects: projects[]
}
     
type skills = {
    name: string,
    rate : number
}

type projects = {
    name: string,
    image: string,
    preview: string,
    github: string
}

export default async function fetch_data() {
    return details
}