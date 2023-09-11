import './index.css';
import Card from "./components/card/Card";
import LatestArticles from './components/latestArticles/LatestArticles';
import Navbar from "././components/navbar/Navbar";
import { articleAPI } from './articleAPI';
import CategoryArticles from './components/categoryArticles/CategoryArticles';

function App() {

  const SECRET_API_KEY = 'bfe13edcfcaf4ba68c6a3232aad57f63'
  const urlTech = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=' + SECRET_API_KEY;
  const urlAI = 'https://newsapi.org/v2/everything?q=ai+artificialintelligence&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;
  const urlGaming = 'https://newsapi.org/v2/everything?q=videogame+console&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;
  const urlComputer = 'https://newsapi.org/v2/everything?q=computer+hardware&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;


  return ( 
    <>
      <Navbar/>
      <div id="page">
        <section id="primary-a-section">
        <LatestArticles apiUrl = {urlTech} title = "Top Tech Headlines"/>
        </section>
        <section id = "category-a-section">
        <CategoryArticles apiUrl = {urlAI} title = "AI"/>
        <CategoryArticles apiUrl = {urlGaming} title = "Gaming"/>
        <CategoryArticles apiUrl = {urlComputer} title = "Computers"/>
        </section>
      </div>
    </>
  );
}

export default App;
