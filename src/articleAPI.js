import Card from "./components/card/Card";
import React from 'react'

export function articleAPI() {

  let displayTitle = ""
  let displayText = ""

  const SECRET_API_KEY = '0b47a3928377426f9dc6e8445a6f91b6'
  //API url sorted my muisc, latest published and english articles
  const url = 'https://newsapi.org/v2/everything?q=music&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;

  function getArticle(props) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          let article = data.articles[2];
          console.log(article);
          displayTitle = article.title;
          displayText = article.content;
          console.log(displayTitle);
        })
        .catch(error => console.error(error))
        return(<>
        
        </>
        )
  }
  getArticle();
}