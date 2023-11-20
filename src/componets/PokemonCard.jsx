import libraryPictures from "../pictures/1.png"
export const PokemonCard = () => {
    // Image en ligne
    //const picture = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    // Image local
    const pictureLocal = libraryPictures
    const alt = "Bulbasaur";
    
  return (
    <div>
        <figure>
            <img src={pictureLocal} alt={alt}/>
            <figcaption>{alt}</figcaption>
       </figure>
    </div>
  )
}
export default PokemonCard;