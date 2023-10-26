import { getCharacter, getCharacters, getEndpoints } from "rickmortyapi"
import Card from "./Card"
import { useEffect, useState } from "react"

function Home(){  
    const [data, setData] = useState(0);
    useEffect(()=>{
        const ver =  getCharacters().then((res)=>{
            console.log(res)
            setData(res.data.results[0]
                )                 
            
        })

    },[]) 
    

return(
    <div>
   <Card info={data}/>
   {/* <img src={data.image} alt="" /> */}
   
   </div>
  
)
}
export default Home