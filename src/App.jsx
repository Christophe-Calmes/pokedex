
import './App.css'
import MyTitle from './componets/MyTitle'
import PokemonCard from './componets/PokemonCard'
import PropTypes from "prop-types";

function App() {


  

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const index = 0;
  const pokePicture = pokemonList[index].imgSrc;
  const pokeName = pokemonList[index].name;
  return (
 
      <div>
        <MyTitle/>
        <PokemonCard pokeName={pokeName} pokePicture={pokePicture}/>
      </div>
 
  )

}
PokemonCard.propTypes = {
  pokeName: PropTypes.string.isRequired,
  pokePicture: PropTypes.string.isRequired
}
export default App
