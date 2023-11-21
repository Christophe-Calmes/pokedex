import PropTypes from "prop-types";
export const NavBar = ({ setPokemonIndex,  pokemonList}) => {
  return (
    <div>
      <ul>
        {
          pokemonList.map((element, index)=> (
            <li key={element.name}><button onClick={() => setPokemonIndex(index)}>{element.name} {index}</button></li>
          ))
        }
      </ul>
    </div>
  )
}
NavBar.propTypes = {
  lengthPokemonList: PropTypes.number.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
}
export default NavBar;