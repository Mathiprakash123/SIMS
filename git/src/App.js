
import { Routes,Route } from 'react-router-dom';
import Home from './components/navcomponents/Home';
import About from './components/navcomponents/About';
import Services from './components/navcomponents/Services';
import Login from './components/login/Login';
import Signup from './components/Signup/Signup';
import ForgetPass from './components/forgetpassword/ForgetPass';
import Navbar from './components/navbar';
import School from './components/erp/School';
import College from './components/erp/College';
import University from './components/erp/University';
import Faqs from './components/navcomponents/faqs/Faqs';
import Dashboard from './components/dashboard/dashboard';


function App() {
  return (
    <div>
     <Routes>

    <Route path='/' element={<Home />}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/services' element={<Services/>}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
     <Route path='forgetpassword' element={<ForgetPass/>}></Route>
     <Route path='/school' element={<School />}></Route>
     <Route path='/college' element={<College />}></Route>
     <Route path='/university' element={<University />}></Route>
     <Route path='/faqs' element={<Faqs />}></Route>
     <Route path='/dashboard' element={<Dashboard />}></Route>

     </Routes>
     
    </div>
  );
}

export default App;
