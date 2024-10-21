export default async function fetcher(url) {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
