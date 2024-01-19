import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './MainPage';
import Statute from './Statute';
import Gallery from './Gallery';
import StatuteManga from "./StatuteManga";

let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage/>}/>
          <Route path="regulamin" element={<Statute/>}/>
          <Route path="regulamin-manga" element={<StatuteManga />}/>
          <Route path="galeria" element={<Gallery />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
