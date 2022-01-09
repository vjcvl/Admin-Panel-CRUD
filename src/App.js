import './App.css';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Userlist from './Components/Userlist';
import ProductList from './Components/ProductList';
import Userform from './Components/Userform';
import Useredit from './Components/Useredit';
import Productform from './Components/Productform';
import Productedit from './Components/Productedit';

function App() {
    return (
        <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className='d-flex flex-column'>
          <div id="content">
              <Topbar></Topbar>
              <div className='container-fluid'>
                <Routes>
                    <Route path="/home" element={<Dashboard/>}></Route>
                    <Route path="/userlist" element={<Userlist/>}></Route> 
                    <Route path="/userform" element={<Userform/>}></Route> 
                    <Route path="/user-edit/:id" element={<Useredit/>}></Route> 
                    <Route path="/productlist" element={<ProductList/>}></Route> 
                    <Route path="/productform" element={<Productform/>}></Route> 
                    <Route path="/product-edit/:id" element={<Productedit/>}></Route> 
                </Routes>
              </div>

          </div>
          </div>
        </div>
        </Router>
    );
}

export default App;
