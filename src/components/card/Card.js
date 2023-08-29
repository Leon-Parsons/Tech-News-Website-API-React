import React from 'react';
import "./card.css";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Card(props) {
  // const SECRET_API_KEY = '0b47a3928377426f9dc6e8445a6f91b6'
  //API url sorted my muisc, latest published and english articles
  // const url = 'https://newsapi.org/v2/everything?q=gaming&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;
  // const url = 'https://newsapi.org/v2/top-headlines?q=film&country=us&apiKey=' + SECRET_API_KEY;
  const url = props.articleTopic
  const [article, setArticle] = useState([]);

  useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const map = data.articles[props.articleNum];
          //Make the returned values of article object an array
          // const result = Object.keys(map).map((key) => map[key]);
          const result = Object.values(map);
          setArticle(result);
          console.log(result);
        });
      }, []);

  return(
    <>
    <div className='article-card'>
      <a id="card-content" href={article[4]} key="link">
        <div id="a-img-div">
          <img id='a-img' key="img" src={article[5]} alt="sorry, image unavailable"></img>
        </div>
        <p id="a-title" key="title">{article[2]}</p>
        <p id="a-text" key="article">{article[3]}</p>
      </a>
    </div>
    </>
  );
}  


