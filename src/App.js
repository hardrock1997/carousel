import Carousel from './carousel';
import image1 from './s1.png';
import image2 from './s2.png';
import './App.css';

const images=[image1,image2];

function App() {
  return (
    <div className="App">
        <Carousel images={images}/>
    </div>
  );
}

export default App;
