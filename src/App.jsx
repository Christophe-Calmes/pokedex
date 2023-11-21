
import './App.css'
import MyTitle from './componets/MyTitle'
import PokemonCard from './componets/PokemonCard'
import NavBar from './componets/NavBar';
import { useState } from "react"; 
import { useEffect } from "react";
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
      imgSrc: '****'
    },
  ];
function App() {

  useEffect(()=>{
  alert("hello pokemon trainer :)");
  }, [])

  const lengthPokemonList = pokemonList.length;
  const [pokemonIndex, setPokemonIndex] = useState(0);

 
  const index = pokemonIndex;
  if(pokemonIndex === 3) {
    alert("pika pikachu !!!");
  }
  const pokePicture = pokemonList[index].imgSrc;
  const pokeName = pokemonList[index].name;
  return (
 
      <div>
        <MyTitle/>
        <NavBar lengthPokemonList={lengthPokemonList}
                pokemonIndex={pokemonIndex}
                setPokemonIndex={setPokemonIndex}
                pokemonList={pokemonList}/>
        <PokemonCard pokeName={pokeName} pokePicture={pokePicture}/>
        
      </div>
      
 
  )

}


export default App
