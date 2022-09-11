import axios from 'axios';
import React, {useState} from 'react';
import Card from './Card';
function App() {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'

  const [search,setSearch] = useState('')
  const [pokemon,setPokemon] = useState([])
  const handleChange = e => {
    setSearch (e.target.value)
    console.log('value is', e.target.value)
  }
  const handleSubmit = async (e)=>  {
    e.preventDefault();
    await axios.get(`${URL}${search}`)
    .then(({data})=> {
      const {name,sprites,abilities,types} = data
      console.log(name,sprites.front_default,abilities,types[0].type.name)
      ;})
    .catch(error => console.error(error))
    
  }
  return (
    <div className="App" onSubmit={handleSubmit}>
      <form className='searchForm'>
      <input placeholder='pokemon' type='text' id='search' onChange={handleChange}></input>
      <button type='submit'>submit</button>
      </form>
      <Card/>
    </div>
  );
}

export default App;
