import './App.css';
import ContactPage from './components/ContactPage/ContactPage';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Services/Service';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={<Service />} />

    </Routes>
    </>
  );
}

export default App;
