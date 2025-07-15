import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'https://kiddo2.pythonanywhere.com';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    role: 'STUDENT' | 'STAFF';
  };
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_BASE_URL}/api/v1/accounts/login/`, {
      username,
      password,
    });
    // Store token for future requests
    axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      throw new Error('نام کاربری یا رمز عبور اشتباه است');
    }
    throw new Error('خطا در ارتباط با سرور');
  }
};
