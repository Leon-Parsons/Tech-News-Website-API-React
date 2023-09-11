import React from 'react'
import Card from '../card/Card'
import "./categoryArticles.css";

export default function CategoryArticles(props) {

  console.log(props.apiUrl);

  return (
    <>
      <section id='c-a-section'>
        <h1 className='section-title' id="category-title">Latest in {props.title}</h1>
          <div id="c-a-display">
            <Card articleNum = {1} articleTopic = {props.apiUrl}/>
            <Card articleNum = {2} articleTopic = {props.apiUrl}/>
            <Card articleNum = {3} articleTopic = {props.apiUrl}/>
          </div>
      </section>
    </>
  )
}
