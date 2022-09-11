import React from 'react'

function Card({name,img,type,abilities}) {
  return (
    <div>
        <h1>{name}</h1>
        {type.map(e=><h1>{e}</h1>)}
        {abilities.map(e=><h1>{e}</h1>)}
        <img src={img}></img>
    </div>
  )
}

export default Card