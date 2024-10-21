export default async function Send_message(url, data) {
  const baseUrl = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
  try {
    const res = await fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
