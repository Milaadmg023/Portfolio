export default async function Send_message(url, data) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const fullUrl = new URL(url, apiUrl);
  try {
    const res = await fetch(fullUrl, {
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
