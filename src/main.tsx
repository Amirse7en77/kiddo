import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store';
import { setupAxiosInterceptors, getMe } from './api';
import { setUser } from './slice/userSlice';

const queryClient = new QueryClient();

// Function to initialize the app state
const initializeApp = async () => {
  setupAxiosInterceptors();

  const token = localStorage.getItem('authToken');
  if (token) {
    try {
      // Fetch user data if token exists
      const userData = await getMe();
      store.dispatch(setUser(userData));
    } catch (error) {
      console.error("Failed to restore session:", error);
      // If getMe fails (e.g., expired token), the interceptor will handle logout.
    }
  }

  // Render the app after attempting to restore session
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
       <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
      </QueryClientProvider>
    </StrictMode>,
  );
};

initializeApp();