
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeroSection from './components/HeroSection'
import FutureCar from './components/FutureCar';
import Understanding from './components/Understanding';
import WhyChoose from './components/WhyChoose'
import BehindScenes from './components/BehindScenes';
import GetContestant from './components/GetContestant';


function App() {
  return (
    <div>
      <HeroSection/> 
      <FutureCar/>
      <Understanding/>
      <WhyChoose/> 
      <BehindScenes/>
      <GetContestant/> 
    </div>
  );
}

export default App;
