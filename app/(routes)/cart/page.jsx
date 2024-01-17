"use client"

import { useGameContext } from "@/context/GameProvider"
import { useProviderContext } from "@/context/Provider"
import CartList from "@/components/CartList"

import { motion } from "framer-motion"
import { ArrowBigRightIcon } from "lucide-react"
import Link from "next/link"

const page = () => {
    const {total,setTotal} =useProviderContext();
    const {cart}=useProviderContext();
    const {games}=useGameContext();

  return (
    <motion.div
            initial={{ opacity: 0 }}
                animate={{ opacity: 1 ,transition:{delay:0.5}}}
                exit={{ opacity: 0 }}
             className=" overflow-y-auto scrollbar h-full max-lg:pt-12">
             <div className="max-md:pt-10 p-4">
                  <h2 className="text-4xl font-writing">My Cart</h2>
             </div>
             <div className="w-full grid grid-cols-1 px-6 gap-6 max-lg:pb-20 pb-10">
             {
                 games.map((game)=>(
                  cart.includes(game.title) && 
                  <CartList game={game}/>
                 ))
             }

             </div>
             <div>
                  <h2 className="text-4xl font-writing text-center">Total: ${(total.toFixed(2))}</h2>
             </div>

             <motion.div
             whileTap={{scale:0.9}}
              className="absolute right-0  bottom-0 text-white p-6 bg-[var(--second)] cus-border">
                <Link href="/checkout" className="flex items-center">
                <span className="font-writing text-2xl">Checkout</span>
                 <span><ArrowBigRightIcon/></span>
                </Link>
             </motion.div>

             </motion.div>
  )
}

export default page