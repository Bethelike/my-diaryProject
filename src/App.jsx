import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Diary from './Pages/Diary';
import Home from './pages/Home';
import Note from './pages/Note';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
         <Route path='/home' element={<Home/>} />
          <Route path='/Note' element={<Diary/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
