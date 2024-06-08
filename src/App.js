
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeroSection from './components/HeroSection'
import FutureCar from './components/FutureCar';
import Understanding from './components/Understanding';


function App() {
  return (
    <div>
      <HeroSection/> 
      <FutureCar/>
      <Understanding/>  
    </div>
  );
}

export default App;
