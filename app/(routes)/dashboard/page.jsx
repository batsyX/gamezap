"use client"
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./dashboard.css";
import GameSwiper from "@/components/GameSwiper";
import Link from "next/link";
import { ArrowBigRightIcon } from "lucide-react";

import GameCard from "@/components/GameCard";
import { useGameContext } from "@/context/GameProvider";

const Page = ()=>{
    
    const [loading, setLoading] = useState(true);
    const{games,setGames}= useGameContext();
    useEffect(() => {
        if(games.length>0){
            setLoading(false);
        }
    }, [games])

    return (
                
        loading ? (
            <></>
        ):(
            <motion.div
            initial={{ opacity: 0 }}
                animate={{ opacity: 1 ,transition:{delay:0.5}}}
                exit={{ opacity: 0 }}
                className="h-full max-lg:mt-12 overflow-y-auto scrollbar"
             >
              
                <GameSwiper games={games}/>

                <div className=" mx-2 pb-6 flex justify-between max-md:justify-center max-md:gap-5  items-center">
                    <h2 className={`text-2xl font-writing  ml-12 max-md:ml-2 max-sm:ml-4 max-sm:hidden `}>Promotional Offers</h2>
                    <Link href="/categories" className="flex gap-0">
                       <p className="font-writing"> View More Games</p>
                       <p><ArrowBigRightIcon/></p>
                    </Link>
                </div>

                <div className={`w-full grid grid-cols-4 max-md:grid-cols-4 max-sm:grid-cols-2 px-6 gap-6 max-lg:pb-20 pb-10`}>
                    {
                        games.map((game)=>(
                            <GameCard key={game._id} game={game}/>
                        ))
                    }
                </div>
             
             </motion.div>
        )
    )
}

export default Page;
