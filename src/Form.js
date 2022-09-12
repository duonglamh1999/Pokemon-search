import React from 'react'
import styled from 'styled-components'

function Form({handleChange}) {
  return (
    <FromContainer>
      <input placeholder='pokemon' type='text' id='search' onChange={handleChange}></input>
      <button type='submit'>submit</button>
      </FromContainer>
  )
}

const FromContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:300px;
input{

}
`
export default Form