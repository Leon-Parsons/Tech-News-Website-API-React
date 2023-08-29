import './index.css';
import Card from "./components/card/Card";
import LatestArticles from './components/latestArticles/LatestArticles';
import Navbar from "././components/navbar/Navbar";
import { articleAPI } from './articleAPI';

function App() {
  return ( 
      <div>
        <LatestArticles/>
      </div>
  );
}

export default App;
