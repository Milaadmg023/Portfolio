export default async function Send_message(url, data) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
  try {
    const res = await fetch(`${apiUrl}${url}`, {
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
