async function fetchData(url){
    const baseUrl = "http://localhost:8080"
    console.log(baseUrl+url);
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();    
    console.log(data);
    
    return data[0]
}

export default fetchData