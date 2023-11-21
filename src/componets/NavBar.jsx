import PropTypes from "prop-types";

export const NavBar = ({lengthPokemonList, setPokemonIndex, pokemonIndex}) => {

  return (
    <div>
      {pokemonIndex <= 0 ? <p>Last</p>  : <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>Last</button>}
      {pokemonIndex >= lengthPokemonList-1 ? <p>Next</p> : <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>Next</button>}
    </div>
  )
}
NavBar.propTypes = {
  lengthPokemonList: PropTypes.number.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
}
export default NavBar;