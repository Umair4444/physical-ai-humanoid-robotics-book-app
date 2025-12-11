// frontend/src/services/apiClient.ts

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

async function get<T>(path: string): Promise<ApiResponse<T>> {
  const apiUrl = process.env.GATSBY_API_URL || 'http://localhost:8000/api';
  const response = await fetch(`${apiUrl}${path}`);
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  const data: T = await response.json();
  return { data, status: response.status, statusText: response.statusText };
}

// Add other methods like post, put, delete as needed
export const apiClient = {
  get,
};