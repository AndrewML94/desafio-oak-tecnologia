import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import App from './App.tsx';
import FetchProductProvider from './context/FetchProductContext.tsx';
import 'react-notifications-component/dist/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FetchProductProvider>
    <BrowserRouter>
      <ReactNotifications />
      <App />
    </BrowserRouter>
  </FetchProductProvider>,
);
