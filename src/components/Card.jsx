import { getEpisode } from "rickmortyapi";

function Card(props) {
  
 console.log(props)
  return (
    <>
     <img src={props.info.image}></img>
     <br />
     name: {props.info.name}
     <br></br>
     id:{props.info.id}
     <br></br>
     Genero:{props.info.gender === "Male" ? "Hombre" : "Mujer"}
     <br></br>
     Especie:
     {props.info.species === 'Human' ? "Human" : props.info.species }
     <br />
     Estado: {props.info.status === 'Alive' ? "Vivo" : props.info.species }
     <br />
{/*      Origen: {props.info.origin.name}  
     <br />
     Episiodios: { props.info.episode != 0 ? props.info.episode.length : "" */}
      
     
     
    
    

      {/* <button onClick={changes}>{props.name}</button> */}
    </>
  );
}
export default Card;
