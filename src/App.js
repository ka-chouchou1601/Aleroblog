import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Page1 from './views/Page1';

import Product2 from './views/Product2';
import PostGrid from'./views/PostGrid'
import SignIn from "./views/SignIn";
import  ResetPassword from "./views/ResetPassword";
import ForgotPassword from "./views/ForgotPassword";
function App() {
  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<Product2/>}/>
           <Route path='/PostGrid' element={<PostGrid/>}/>
             <Route path='/SignIn' element={<SignIn/>}/>
             <Route path="/ResetPassword" element={<ResetPassword/>}/>
              <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      
        
    
      </Routes>
    </Router>  
   
  );
}

export default App;
