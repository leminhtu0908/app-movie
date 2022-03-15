import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import Index from './modules/Auth/Index';
import Register from './modules/Auth/components/Register/Register';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Index />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
