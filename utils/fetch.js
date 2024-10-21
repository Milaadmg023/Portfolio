export default async function fetcher(url) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const fullUrl = new URL(url, apiUrl);
  try {
    const res = await fetch(`${apiUrl}${url}`);
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      const text = await response.text();
      console.error('Unexpected response:', text);
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
