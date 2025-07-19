// src/api.ts
import axios, { AxiosError } from 'axios';
import { router } from './router'; // Import router for navigation
import { store } from './store'; // Import store to dispatch actions
import { clearUser } from './slice/userSlice'; // Import the action to clear user data

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
  console.log("API CALL: login", { username });
  try {
    const response = await axios.post<LoginResponse>(`${API_BASE_URL}/api/v1/accounts/login/`, {
      username,
      password,
    });
    // Store token for future requests
    axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
    console.log("API RESPONSE: login success", response.data.user);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
     console.error("API ERROR: login", axiosError.response?.data);
    if (axiosError.response?.status === 400) { // Django REST Framework returns 400 for bad credentials
      throw new Error('نام کاربری یا رمز عبور اشتباه است');
    }
    throw new Error('خطا در ارتباط با سرور');
  }
};

// This function sets up the global interceptor
export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    // On successful response, just return it
    (response) => response,
    // On error, check for 401
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        console.log('Global 401 Unauthorized error detected. Logging out and redirecting.');
        // Clear user data from Redux
        store.dispatch(clearUser());
        // Clear auth header
        delete axios.defaults.headers.common['Authorization'];
        // Redirect to login page
        router.navigate('/');
      }
      // Important: return the error so that the original caller (e.g., useQuery) can handle it too
      return Promise.reject(error);
    }
  );
};