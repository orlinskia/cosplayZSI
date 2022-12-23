import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './MainPage';
import Statute from './Statute';
import Participants from './Participants';
import Gallery from './Gallery';

let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage/>}/>
          <Route path="regulamin" element={<Statute/>}/>
          {/* <Route path="uczestnicy" element={<Participants/>}/>
          <Route path="galeria" element={<Gallery />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
