import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import FetchProductProvider from './context/FetchProductContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FetchProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FetchProductProvider>,
);
