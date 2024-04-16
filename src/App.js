import './App.css';
import ContactPage from './components/ContactPage/ContactPage';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />

    </Routes>
    </>
  );
}

export default App;
