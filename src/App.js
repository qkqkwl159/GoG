
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
    
    
    <Route path="/" exact element={<Home/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    

    
      


        
      
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
