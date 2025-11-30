
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Categories from './Pages/Categories';
import Privse from './Pages/Privse';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cafe from './Pages/Cafe';
import Restaurant from './Pages/Restaurant';
import Heritage from './Pages/Heritage';
import Footer from './Components/Footer';
import Allcafe from './Pages/Allcafe';
function App() {
  return (
    
 <BrowserRouter>


  <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login />} />
       <Route path="/main" element={<Main />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />



  
            <Route index element={<Home />} />
          

                      

            <Route path='/cafe' element={<Cafe/>}/>


            <Route path='/heritage' element={<Heritage/>}/>


            <Route path='/Restaurant' element={<Restaurant/>}/>


           <Route path='/allcafe' element={<Allcafe/>}/>


       
  </Routes>
  
</BrowserRouter>


  );
}

export default App;













 