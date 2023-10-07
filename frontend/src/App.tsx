import { Routes, Route } from 'react-router-dom';
import ParentComponent from './components/ParentComponent';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <ParentComponent /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
