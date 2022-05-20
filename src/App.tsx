import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import Route from './routes/Route';
function App() {
  const queryClient = new QueryClient();
  return (
    // <ThemeProvider>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Route />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
    // </ThemeProvider>
  );
}

export default App;
