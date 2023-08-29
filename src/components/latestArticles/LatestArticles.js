import React from 'react'
import Card from '../card/Card'
import "./latestArticles.css";

export default function LatestArticles() {

  return (
    <div id="l-a-display">
      <Card articleNum = {1} />
      <Card articleNum = {2} />
      <Card articleNum = {3} />
      <Card articleNum = {4} />
      <Card articleNum = {5} />
    </div>
  )
}
