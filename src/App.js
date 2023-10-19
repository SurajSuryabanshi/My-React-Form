import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import NewShop from './components/NewShop';
import NewProduct from './components/NewProduct';



function App() {
  return (
  
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/newshop" element={<NewShop />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
