
import './App.css';
import { Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contactus from './pages/Contact us/Contactus';
import Videos from './pages/our videos/Videos';
import Subscription from './pages/Subscription/Subscription';
// import Feature from './pages/feature/feature';
import NavigationBar from './components/Navbar/Navbar';
import VehicleManagement from './components/Vehicle Management/VehicleManagement';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vehiclemanagement' element={ <VehicleManagement/>}/>
        <Route path='/videos' element={<Videos />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/contact' element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;