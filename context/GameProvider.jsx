"use client"
import { createContext,useContext,useState,useEffect } from "react"

const GameContext = createContext();

const GameProvider = ({children}) => {
    const [games, setGames] = useState([]);

    





    const fetchGames=async()=>{

        const response=await fetch('https://api.jsonbin.io/v3/b/65a6ad63dc74654018940ca6',{
        method:'GET',
        headers:{
            "X-Master-Key":"$2a$10$Qc7muCCkf8Jjvb8/ET8wJuI/GSfQnzjPe3omsyhV.ibx4NA2wTL6O"
        }
        });
        const extracted= await response.json();
        setGames(extracted.record); 
        }    
    
    useEffect(
        ()=>{
            fetchGames();
        },[]
    )

    return(
        <GameContext.Provider value={{games,setGames}}>
            {children}
        </GameContext.Provider>
    )       
}

export default GameProvider

export const useGameContext = () => {
    return useContext(GameContext);
}