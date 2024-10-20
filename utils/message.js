export default async function Send_message(url, data) {
  const public_url = process.env.PUBLIC_URL;
  try {
    const res = await fetch(public_url + url, {
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
