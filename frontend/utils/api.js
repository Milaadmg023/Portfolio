async function fetchData(url){
    const baseUrl = "http://localhost:8080"
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();    
    return data[0]
}

export default fetchData