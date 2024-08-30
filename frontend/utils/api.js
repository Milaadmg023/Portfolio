export async function Get(url){
    const baseUrl = "http://localhost:8080"
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json(); 
    return data[0]
}

export async function Post(url, data){
    const baseUrl = "http://localhost:8080"
    const response = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const res = await response.json(); 
    return res
}