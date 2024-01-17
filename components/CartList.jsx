"use client"
import { useProviderContext } from "@/context/Provider"
import { DeleteIcon, Trash, TrashIcon } from "lucide-react";


const cartList = ({game}) => {
    const {cart,setCart}=useProviderContext();
    const {total,setTotal}=useProviderContext();
    const handleCart=()=>{
         if(cart.includes(game.title)){
            setCart(cart.filter((cart)=>cart!==game.title))
            
            setTotal(total-((1-game.discount)*game.price))
        }
    }
  return (
    <div className="relative w-full flex  shadow-cus-shadow justify-between items-center rounded-xl">
        
       <div className="flex items-center justify-between gap-6">
        <div>
                <img src={game.img} height={100} width={100} className="rounded-xl" alt="" />
            </div>
            <div>
                <h3 className="text-white font-writing ">
                    {
                        game.title
                    }
                </h3>
            </div>
       </div>
        <div className="flex items-center justify-between gap-6 pr-14">
            <div>
                <p className="text-white text-sm line-through decoration-red-800 decoration-4 ">
                    {
                        game.price
                    }
                </p>
            </div>
            <div>
            <p className="text-white">
                    ${
                        ((1-game.discount)*game.price).toFixed(2)
                    }
                </p>
            </div>
        </div>
        <div className="absolute right-0">
            <button title="Remove" onClick={handleCart} className="text-white font-writing bg-[var(--second)] p-2 rounded-xl opacity-60 hover:opacity-80">
                    <TrashIcon size={20}/>
            </button>
        </div>


    </div>
  )
}

export default cartList