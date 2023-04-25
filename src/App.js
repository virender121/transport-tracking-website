import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contactus from './pages/Contact us/Contactus';
import Videos from './pages/our videos/Videos';
import Subscription from './pages/Subscription/Subscription';
import Feature from './pages/feature/feature';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/videos' element={<Videos />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/contact' element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
