export default async function fetcher(url) {
  const baseUrl = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
  try {
    const res = await fetch(baseUrl + url);
    return res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
