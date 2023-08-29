import React from 'react'
import { articleAPI } from '../articleAPI'

function CardDisplay() {
  articleAPI();
  return (
    <div>
      {articleAPI()}
    </div>
  )
}

export default CardDisplay
