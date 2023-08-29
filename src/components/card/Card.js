import React from 'react';
import "./card.css";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Card(props) {
  const SECRET_API_KEY = 'bfe13edcfcaf4ba68c6a3232aad57f63'
  //API url sorted my muisc, latest published and english articles
  const url = 'https://newsapi.org/v2/everything?q=music&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;
  const url2 = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello';
  const [article, setArticle] = useState();

  useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const map = data.articles[props.articleNum];
          //Make the returned values of article object an array
          // const result = Object.keys(map).map((key) => map[key]);
          const result = Object.values(map);
          setArticle(result);
          console.log(result)
        });
      }, []);

  return(
    <div className='article-card'>
      <a href={article[4]}>
        <img src={article[5]} alt="sorry, image unavailable"></img>
        <p id="a-title" key="title">{article[2]}</p>
        <p id="a-text" key="article">{article[3]}</p>
      </a>
      <h1>meme {props.articleNum}</h1>
    </div>
  );
}  


