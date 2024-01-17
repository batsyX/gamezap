"use client"

import {motion} from "framer-motion";
import { useGameContext } from "@/context/GameProvider";
import GameCard from "@/components/GameCard";

import { useState} from "react"

const categories=[
  {
    name:"All",
    active:true
  },
  {
    name:"MOBA",
    active:false
  },
  {
    name:"Fighting",
    active:false
  },
  {
    name:"Racing",
    active:false
  },
  {
    name:"Battle",
    active:false
  },
  {
    name:"RPG",
    active:false
  }
  
]



const page = () => {
  const {games}=useGameContext();
  const [current,setCurrent]=useState(categories)
 


  return (
    
      games && games.length>0?
    <motion.div
            initial={{ opacity: 0 }}
                animate={{ opacity: 1 ,transition:{delay:0.5}}}
                exit={{ opacity: 0 }}
             className="overflow-y-auto scrollbar h-full max-lg:mt-12">
             <div className="max-md:mt-10 p-4">
                  <h2 className="text-4xl font-writing">Categories</h2>
             </div>
             
            <div className="px-4 py-6 w-full grid grid-cols-6 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              {
                current.map((item)=>(
                  <button className={`text-white text-lg px-8 max-md:px-4 py-2 rounded-xl ${item.active?'bg-[var(--second)]':'bg-gray-700'} overflow-hidden`} key={item.name} 
                  onClick={()=>setCurrent(prev=>prev.map((category)=>category.name===item.name?{...category,active:true}:{...category,active:false}))}
                  >{item.name}</button>
                ))
              }
            </div>

              <div className="w-full grid grid-cols-4  max-sm:grid-cols-2 px-6 gap-6 max-lg:pb-20 pb-10">

             {
                 games.map((game)=>(
                  current.find((category)=>category.active===true).name==="All"?
                  <GameCard game={game}/>:game.category===current.find((category)=>category.active===true).name?<GameCard game={game}/>:null
                 ))
             }
              </div>

             </motion.div>
      :<>

      </>
    
  )
}

export default page