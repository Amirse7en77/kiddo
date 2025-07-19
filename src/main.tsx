// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router' // Removed App import as it's handled by router
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store'
import { setupAxiosInterceptors } from './api' // Import the setup function

// Call the setup function once when the app starts
setupAxiosInterceptors();

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)