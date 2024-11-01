import React from 'react'
import Figure from './Figure'
export default function Card({title, text,image,date}){
    return(
      <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <Figure
          image={image}
          date={date}
          />
        </div>
    )
  }