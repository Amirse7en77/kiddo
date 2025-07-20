import axios, { AxiosError } from 'axios';
import { router } from './router'; 
import { store } from './store'; 
import { clearUser, setUser } from './slice/userSlice'; 
import { UserState } from './slice/userSlice';

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
    
    // Store token for future requests and persistence
    axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
    localStorage.setItem('authToken', response.data.token); // <-- Store token in localStorage

    console.log("API RESPONSE: login success", response.data.user);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
     console.error("API ERROR: login", axiosError.response?.data);
    if (axiosError.response?.status === 400) {
      throw new Error('نام کاربری یا رمز عبور اشتباه است');
    }
    throw new Error('خطا در ارتباط با سرور');
  }
};

/**
 * Fetches the current user's data using the stored token.
 * @returns A promise that resolves to the user data.
 */
export const getMe = async (): Promise<UserState> => {
    console.log("API CALL: getMe");
    const token = localStorage.getItem('authToken');
    if (!token) {
      return Promise.reject("No token found");
    }
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    const response = await axios.get(`${API_BASE_URL}/api/v1/accounts/me/`);
    const user = response.data;
    console.log("API RESPONSE: getMe success", user);
    // Return the full UserState structure including the token
    return { ...user, token };
};

/**
 * Logs the user out by clearing credentials.
 */
export const logout = () => {
    console.log("ACTION: Logging out");
    localStorage.removeItem('authToken'); // <-- Clear token from localStorage
    delete axios.defaults.headers.common['Authorization'];
    store.dispatch(clearUser()); // Clear user from redux
    router.navigate('/'); // Redirect to login
};

// This function sets up the global interceptor
export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        console.log('Global 401 Unauthorized error detected. Logging out.');
        // If a 401 happens, it means the token is invalid, so perform a full logout
        logout();
      }
      return Promise.reject(error);
    }
  );
};