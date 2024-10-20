export default async function fetcher(url) {
  const public_url = process.env.PUBLIC_URL;
  try {
    const res = await fetch(public_url + url);
    return res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
