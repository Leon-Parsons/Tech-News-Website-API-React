import './index.css';
import Card from "./components/card/Card";
import LatestArticles from './components/latestArticles/LatestArticles';
import Navbar from "././components/navbar/Navbar";
import { articleAPI } from './articleAPI';

function App() {

  const SECRET_API_KEY = '0b47a3928377426f9dc6e8445a6f91b6'
  const urlAI = 'https://newsapi.org/v2/everything?q=ai&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;
  const urlGaming = 'https://newsapi.org/v2/everything?q=gaming&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;

  return ( 
      <div>
        <LatestArticles apiUrl = {urlAI} title = "Artificial Intelligence"/>
        <LatestArticles apiUrl = {urlGaming} title = "Gaming"/>
      </div>
  );
}

export default App;
