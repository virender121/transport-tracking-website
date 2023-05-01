
import './App.css';
import { Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contactus from './pages/Contact us/Contactus';
import Videos from './pages/our videos/Videos';
import Subscription from './pages/Subscription/Subscription';
import NavigationBar from './components/Navbar/Navbar';
import VehicleManagement from './components/Vehicle Management/VehicleManagement';
import NewSubscriber from './components/NewSubscriber/NewSubscriber';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
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
        <Route path='/newSubscription' element={<NewSubscriber />}/>
      </Routes>
      <WhatsAppButton/>
    </div>
  );
}

export default App;