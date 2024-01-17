import { UserButton } from "@clerk/nextjs"
import { HeartIcon, ShoppingCart } from "lucide-react"
import "./header.css"
import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full h-full flex justify-end items-center gap-4 py-2 px-4">
        <Link className="text-white icon flex items-center justify-center" href="/library">
            <HeartIcon size={20}/>
        </Link>

        <Link className="text-white icon flex items-center justify-center" href="/cart">
            <ShoppingCart size={20}/>
        </Link>
        
        <div  >
            <UserButton 
            
              afterSignOutUrl="/"
            />
        </div>
    </div>
  )
}

export default Header