export default async function Post_handler(url, data , type) {
  const baseUrl = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
  const headers = type === "json" ? { "Content-Type": "application/json" } : {"Content-Type": "multipart/form-data"};
  const body = type === "json" ? JSON.stringify(data) : data;
  try {
    const res = await fetch(baseUrl + url, {
      method: "PUT",
      body: body,
    });
    const data = await res.json()
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
