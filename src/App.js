import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Page1 from './views/Page1';

import Product2 from './views/Product2';
import PostGrid from'./views/PostGrid'
import RecentPosts2 from "./components/common/RecentPosts/RecentPosts2";
import RecentPosts3 from "./components/common/RecentPosts/RecentPosts3";
import Login from "./views/Login";
function App() {
  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<Product2/>}/>
           <Route path='/PostGrid' element={<PostGrid/>}/>
             <Route path='/Login' element={<Login/>}/>
        <Route path='/test' element={<RecentPosts2/>}/>
        <Route path='/test2' element={<RecentPosts3/>}/>
        
    
      </Routes>
    </Router>  
   
  );
}

export default App;
