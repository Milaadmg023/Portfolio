export default async function Delete(url, data, type) {
  const baseUrl =
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
  const body = { type: type, id: data };
  const res = await fetch(baseUrl + url, {
    method: "DELETE",
    body: JSON.stringify(body),
  });
  return res.json();
}
