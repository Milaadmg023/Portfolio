export type details = {
    about : string | undefined,
    skills : skills[] | undefined,
    projects: projects[] | undefined
}

export type skills = {
    name: string,
    rate : string
}

export type projects = {
    name: string | undefined,
    image: string | undefined,
    preview: string,
    github: string
}