export async function fetchAPI<T extends {}>(url: string): Promise<T> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  // Check the API Key
  if (!process.env.API_KEY) {
    throw new Error('API Key not defined');
  }

  const res = await fetch(`${url}&apiKey=${process.env.API_KEY}`);
  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json as T;
}
