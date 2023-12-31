

export const PokemonCard = ({pokePicture, pokeName}) => {


    
  return pokePicture ?  (
    <div>  
        <figure>
            <img src={pokePicture} alt={pokeName}/>
            <figcaption>{`Name of Pokemon : ${pokeName}`}</figcaption>
       </figure>
    </div>
  ) : (
        <p>Name of Pokemon : {pokeName}</p>
      )
}
export default PokemonCard;