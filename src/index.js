import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ React Query imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ✅ QueryClient create karo (global config ke sath)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, // data kabhi stale nahi hoga
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ App ko QueryClientProvider ke andar wrap karna zaruri hai */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// Performance tracking (optional)
reportWebVitals();
