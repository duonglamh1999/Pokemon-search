import React from 'react'
import styled from 'styled-components'
function Card({name,img,type}) {
  return (
    <CardContainer>
        <p>{name}</p>
        <img src={img} alt="n/a"></img>
        {type.map(e=><span>{e}</span>)}
 
    </CardContainer>
  )
}



const CardContainer = styled.div`
border: 2px solid black;
width: 150px;
height: 225px;
border-radius:.5rem;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:1rem;
`

export default Card