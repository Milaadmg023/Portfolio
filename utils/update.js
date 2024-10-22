export default async function Update(url, data) {
  const baseUrl =
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
  try {
    const res = await fetch(baseUrl + url, {
      method: "PUT",
      body: data,
    });
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
}