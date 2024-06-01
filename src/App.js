import './App.css';
import Dashboard from './components/Dashboard';
import Dashpoard2 from './components/Dashpoard2';
import Home from './pages/Home';
import Log1 from './pages/Log1';
import Log2 from './pages/Log2';
import Login from './pages/Login';
import Open from './pages/Open';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Page2 from './pages/Page2';
import Datilse from './pages/Datilse';
import Cart from './pages/Cart';
import Corsat from './pages/Corsat';
import Corsat1 from './pages/Corsat1';
import Corsat2 from './pages/Corsat2'
import Cors from './pages/Cors';
import Cors1 from './pages/Cors1';
import Cors2 from './pages/Cors2';
import Teachres from './pages/Teachres';
import Profile from './pages/Profile';
import ProfileStudent from './pages/ProfileStudent';
import ProfileDegree from './pages/ProfileDegree';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
           <Routes>
             <Route path='/' element={<Open/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/log1' element={<Log1/>}/>
             <Route path='/log2' element={<Log2/>}/>
             <Route path='/home' element={<Home/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/page2' element={<Page2/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/datilse' element={<Datilse/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/cart' element={<Cart/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/corsat' element={<Corsat/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/corsat1' element={<Corsat1/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/corsat2' element={<Corsat2/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/cors' element={<Cors/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/cors1' element={<Cors1/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/cors2' element={<Cors2/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/teachers' element={<Teachres/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>

             <Route path='/profile' element={<Profile/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/profile-student' element={<ProfileStudent/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>
             <Route path='/profile-degree' element={<ProfileDegree/>}>
                <Route index  element={<Dashboard/>}/>
                <Route path='dash2' element={<Dashpoard2/>}/>
             </Route>

           </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
