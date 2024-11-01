import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const CardStyle=styled.div`
p{margin:0 0 2rem 0}
h2{font-size:1.7em;}
padding:2rem;
`

export default function Card({title, text,image,date}){
    return(
      <CardStyle>
          <h2>{title}</h2>
          <p>{text}</p>
          <Figure
          image={image}
          date={date}
          />
        </CardStyle>
    )
  }