import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {QueryClientProvider,QueryClient} from "react-query"
import { ChakraProvider } from '@chakra-ui/react';
const queryProvider=new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryProvider}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


