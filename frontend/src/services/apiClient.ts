interface ApiResponse<T> {
  data?: T;
  error?: { message: string; status?: number };
}

async function apiRequest<T>(
  url: string,
  method: string,
  data?: object,
  token?: string,
): Promise<ApiResponse<T>> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      let errorMessage = `HTTP error! Status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.detail || errorData.message || errorMessage;
      } catch (e) {
        // If response is not JSON or parsing fails, use default message
      }
      return { error: { message: errorMessage, status: response.status } };
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return { data: undefined };
    }

    const result: T = await response.json();
    return { data: result };
  } catch (e) {
    if (e instanceof Error) {
      return { error: { message: e.message } };
    }
    return { error: { message: 'An unknown error occurred' } };
  }
}

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000/api'; // Replace with your actual backend URL

export const apiClient = {
  get: <T>(path: string, token?: string) =>
    apiRequest<T>(`${API_BASE_URL}${path}`, 'GET', undefined, token),
  post: <T>(path: string, data: object, token?: string) =>
    apiRequest<T>(`${API_BASE_URL}${path}`, 'POST', data, token),
  put: <T>(path: string, data: object, token?: string) =>
    apiRequest<T>(`${API_BASE_URL}${path}`, 'PUT', data, token),
  delete: <T>(path: string, token?: string) =>
    apiRequest<T>(`${API_BASE_URL}${path}`, 'DELETE', undefined, token),
};

export default apiClient;
