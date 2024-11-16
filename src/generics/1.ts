import axios from 'axios';

type someResponse = string | [];

async function fetchData(url: string): Promise<someResponse | never> {
  try {
    const response = await axios.get<someResponse>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
