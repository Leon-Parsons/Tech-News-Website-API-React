import React from 'react'
import Card from '../card/Card'
import "./latestArticles.css";

export default function LatestArticles(props) {

  console.log(props.apiUrl);

  return (
    <>
    <section id='l-a-section'>
      <h1 className='section-title'>Latest in {props.title}</h1>
        <div id="l-a-display">
          <Card articleNum = {1} articleTopic = {props.apiUrl}/>
          <Card articleNum = {2} articleTopic = {props.apiUrl}/>
          <Card articleNum = {3} articleTopic = {props.apiUrl}/>
          <Card articleNum = {4} articleTopic = {props.apiUrl}/>
          <Card articleNum = {5} articleTopic = {props.apiUrl}/>
        </div>
    </section>
    </>
  )
}
