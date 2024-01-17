"use client"

import {motion} from "framer-motion";

import { useProviderContext } from "@/context/Provider";
import { useGameContext } from "@/context/GameProvider";
import GameCard from "@/components/GameCard";

const page = () => {
  const {heartList} = useProviderContext();
  const {games}=useGameContext();
  return (
    <motion.div
            initial={{ opacity: 0 }}
                animate={{ opacity: 1 ,transition:{delay:0.5}}}
                exit={{ opacity: 0 }}
             className="overflow-y-auto scrollbar h-full max-lg:mt-12">
             <div className="max-md:mt-10 p-4">
                  <h2 className="text-4xl font-writing">My Library</h2>
             </div>
              <div className="w-full grid grid-cols-4 max-sm:grid-cols-2 px-6 gap-6 max-lg:pb-20 pb-10">

             {
                 games.map((game)=>(
                  heartList.includes(game.title)?
                  <GameCard game={game}/>:null
                 ))
             }
              </div>

             </motion.div>
  )
}

export default page