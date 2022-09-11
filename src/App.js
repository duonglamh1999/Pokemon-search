import axios from 'axios';
import React, {useState} from 'react';
import Card from './Card';
function App() {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'

  const [search,setSearch] = useState('')
  const [pokemon,setPokemon] = useState([{
    name:"",
    img:"",
    type:[],
    abilities:[]
  }])
  const handleChange = e => {
    setSearch (e.target.value)
  }
  const handleSubmit = async (e)=>  {
    e.preventDefault();
    await axios.get(`${URL}${search}`)
    .then(({data})=> {
      const {name,sprites,abilities,types} = data
      const {front_default}= sprites
      const typeName = types.map(({type})=> type.name)
      const abilitiesName = abilities.map(({ability})=> ability.name)
      console.log(pokemon)
      setPokemon(pokemon=> [...pokemon,{
        name,
        img:front_default,
        type:typeName,
        abilities:abilitiesName
      }
    ])
      
      console.log(pokemon)
      ;})
    .catch(error => console.error(error))
    
  }
  return (
    <div className="App" onSubmit={handleSubmit}>
      <form className='searchForm'>
      <input placeholder='pokemon' type='text' id='search' onChange={handleChange}></input>
      <button type='submit'>submit</button>
      </form>
      {pokemon.map(({name,img,type,abilities})=> <Card name={name} img={img} type={type} abilities={abilities}/>)}
    </div>
  );
}

export default App;
