export default async function fetcher(url) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
  try {
    const res = await fetch(`${apiUrl}${url}`);
    return res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
