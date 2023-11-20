import libraryPictures from "../pictures/1.png"
export const PokemonCard = () => {
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
  const index = 1;
  const picture = pokemonList[index].imgSrc;
  const name = pokemonList[index].name
    
  return picture ?  (
    <div>  
        <figure>
            <img src={picture} alt={name}/>
            <figcaption>{`Name of Pokemon : ${name}`}</figcaption>
       </figure>
    </div>
  ) : (
        <p>Name of Pokemon : {name}</p>
      )
}
export default PokemonCard;