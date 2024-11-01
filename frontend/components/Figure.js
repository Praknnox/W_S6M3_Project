import React from 'react'
import styled from 'styled-components'

const FigureStyle=styled.figure`
max-width:890px;
padding-left:10rem;
`

export default function Figure({image, date}){
  return(
        <FigureStyle>
          <img src={image}/>
          <figcaption>{date}</figcaption>
          </FigureStyle>

  )
}