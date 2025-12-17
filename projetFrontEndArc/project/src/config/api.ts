const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8888';

export const API_ENDPOINTS = {
  courses: `${API_BASE_URL}/courses`,
  instructors: `${API_BASE_URL}/instructors`,
  students: `${API_BASE_URL}/students`,
  enrollments: `${API_BASE_URL}/enrollments`,
  certificates: `${API_BASE_URL}/certificates`,
};

export const apiClient = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  async put<T>(url: string, data: unknown): Promise<T> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  async delete(url: string): Promise<void> {
    const response = await fetch(url, { method: 'DELETE' });
    if (!response.ok) throw new Error('Network response was not ok');
  },
};
export const API_URL = "http://localhost:8085";
