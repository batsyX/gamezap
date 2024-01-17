"use client"
import {  HeartIcon, ShoppingCartIcon, StarIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import {useProviderContext } from "../context/Provider"

const GameCard = ({game}) => {

    const {heartList,setHeartList,cart,setCart,total,setTotal} = useProviderContext();
    
    const [heartActive, setHeartActive] = useState(false);
    
    const [star, setStar] = useState([]);
    const generateStar=()=>{
        let stars=[];
        for(let i=0;i<game.rating;i++){
            stars.push(<StarIcon key={i} size={14} fill="red" />)
        }
        return stars;
    }
    useEffect(()=>{
        setStar(generateStar())
    },[])

    const handleLike=()=>{
        setHeartActive(!heartActive);
        if(!heartList.includes(game.title)){
            setHeartList([...heartList,game.title])
        }else if(heartList.includes(game.title)){
            setHeartList(heartList.filter((heart)=>heart!==game.title))
        }        
    }
    const handleCart=()=>{
        if(!cart.includes(game.title)){
            setCart([...cart,game.title]);
            setTotal(total+((1-game.discount)*game.price))
        }else if(cart.includes(game.title)){
            setCart(cart.filter((cart)=>cart!==game.title));
            setTotal(total-((1-game.discount)*game.price))
        }
    }


  return (
    <div className=" select-none relative max-lg:col-span-2 col-span-1 shadow-cus-shadow h-62 p-2 border-2 border-black/10 rounded-xl gap-4 flex flex-col ">
        <img  src={game.img} alt={game.title} className="h-2/3 w-full object-cover rounded-xl opacity-80"/>
        <motion.div className={`w-10 h-10 absolute top-0 right-0 bg-gray-900 rounded-xl flex items-center justify-center duration-300 ${heartList.includes(game.title)?'text-red-500':'text-white'}`}>
                <motion.div whileTap={{scale:0.9}}>
                            <HeartIcon size={20} 
                        fill={heartList.includes(game.title)?'red':null}
                        className={`cursor-pointer `} 
                        onClick={(event)=>handleLike(event)}/>
                </motion.div>
        </motion.div>
        <div>
            <h3 className="text-xl text-white font-bauhaus">{game.title}</h3>
            <p className="flex">
                {
                   star.map((star)=>(star))
                }
            </p>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-white p-2 bg-red-500 rounded-xl italic max-md:p-1">
                {
                    game.discount*100
                }% off
            </p>
            <p className="text-white text-sm line-through decoration-red-800 decoration-4 ">
                {
                    game.price
                }
            </p>
            <p className="text-white">
                ${
                    ((1-game.discount)*game.price).toFixed(2)
                }
            </p>
        </div>
        <div>
            <p className="text-white  italic">
                {
                    game.category
                }
            </p>
        </div>
        <div className={`text-white ${cart.includes(game.title)?'bg-red-500':'bg-[var(--second)]'} absolute bottom-0 right-0  p-2 cus-border hover:scale-110 duration-300 cursor-pointer`}
        onClick={handleCart}
        >
            <ShoppingCartIcon size={20} fill="white"/>
        </div>
    </div>
  )
}

export default GameCard