import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import City from './pages/city';
import Location from './pages/location';
import Area from './pages/area';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route  path="/" element={<Location />} />
          <Route  path="/area" element={<Area />} />
          <Route  path="/city" element={<City />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
