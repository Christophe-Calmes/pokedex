
import './App.css'
import MyTitle from './componets/MyTitle'
import PokemonCard from './componets/PokemonCard'
import PropTypes from "prop-types";
import {useState} from "react"; 

function App() {



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
    const lengthPokemonList = pokemonList.length;
    const [pokemonIndex, setPokemonIndex] = useState(0);

  //const index = navigationPokemonList(pokemonIndex, lengthPokemonList);
  const index = pokemonIndex;
  const pokePicture = pokemonList[index].imgSrc;
  const pokeName = pokemonList[index].name;
  return (
 
      <div>
        <MyTitle/>
        <PokemonCard pokeName={pokeName} pokePicture={pokePicture}/>
        {index}
        <div>
          {pokemonIndex <= 0 ? <p>Last</p>  : <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>Last</button>}
          {pokemonIndex >= lengthPokemonList-1 ? <p>Next</p> : <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>Next</button>}
          
        </div>
      </div>
      
 
  )

}
PokemonCard.propTypes = {
  pokeName: PropTypes.string.isRequired,
  pokePicture: PropTypes.string.isRequired
}
export default App
