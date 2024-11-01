import React from 'react'
export default function Figure({image, date}){
  return(
        <figure>
          <img src={image}/>
          <figcaption>{date}</figcaption>
          </figure>

  )
}