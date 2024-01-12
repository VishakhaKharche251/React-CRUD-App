
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const crudcontent = {
    padding:'20px'
  };
 

  return (
    <>
    <Navbar/>
    <div className="container pt-9">
    
    <div className='crudcontent' style={crudcontent}>
    <BrowserRouter>
    <Routes>  
    
    <Route exact path="/" element={<Create/>}></Route>          
    <Route exact path="/read" element={<Read/>}></Route>          
    <Route exact path="/update" element={<Update/>}></Route>          
        
    
    </Routes>
    </BrowserRouter>
    </div>
    </div>
    </>
  );
}

export default App;
