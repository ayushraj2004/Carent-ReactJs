import { useState } from "react" 
import Background from "./componet/Background/Background";
import Navbar from "./componet/Navbar/Navbar";
import Hero from "./componet/Hero/Hero";


const App = () =>{
  let heroData =[
    {text1:"Dive into",text2:"what your love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Rent Your",text2:"Choice"},
  ]
  const[heroCount,setHeroCount]=useState(0);
  const[playStatus,setPlayStatus]=useState(false);
  return(
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />

      
    </div>
  )
}

export default App
