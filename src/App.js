import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';
import Card from './Card';
import Form from './Form';
function App() {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'

  const [search,setSearch] = useState('')
  const [pokemon,setPokemon] = useState([])
  const handleChange = e => {
    setSearch (e.target.value)
  }
  const handleSubmit = async (e)=>  {
    e.preventDefault();
    await axios.get(`${URL}${search}`)
    .then(({data})=> {
      const {name,sprites,types} = data
      const {front_default}= sprites
      const typeName = types.map(({type})=> type.name)
      console.log(pokemon)
      setPokemon(pokemon=> [...pokemon,{
        name,
        img:front_default,
        type:typeName,
      }
    ])
      
      console.log(pokemon)
      ;})
    .catch(error => console.error(error))
    
  }
  return (
    <AppContainer className="App" onSubmit={handleSubmit}>
      <Form handleChange={handleChange}/>
      <CardsContainer>
      {pokemon.map(({name,img,type})=> <Card name={name} img={img} type={type}/>)}
      </CardsContainer>      
    </AppContainer>
  );
}
const AppContainer = styled.div`
padding:0;
margin:0;
box-sizing: border-box;
`
const CardsContainer = styled.div`
display:flex;

`
export default App;
