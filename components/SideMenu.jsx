"use client"
import { HeartIcon, HomeIcon, LucideMenu, MenuIcon, MenuSquare, MenuSquareIcon, Scroll, ScrollIcon, Settings2Icon, ShoppingCartIcon, SlidersHorizontalIcon } from 'lucide-react'
import { useEffect } from 'react'
import "./sidemenu.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { AnimatePresence,motion } from 'framer-motion'
import { useProviderContext } from '@/context/Provider'

const navItems=[
    {
        name:"Dashboard",
        icon:<HomeIcon/>,
        path:"/dashboard"
    },
    {
        name:"Categories",
        icon:<ScrollIcon/>,
        path:"/categories"
    },
    {
        name:"My library",
        icon:<HeartIcon/>,
        path:"/library"
    },
    {
        name:"Cart",
        icon:<ShoppingCartIcon/>,
        path:"/cart"
    }

]




const SideMenu = () => {
    const pathname=usePathname();
    const {isOpen,setIsOpen}=useProviderContext();
    useEffect(() => {
        if(window.innerWidth>768){
            setIsOpen(true)
        }
    }, [])
  return (
    <AnimatePresence>
    <div className={`rounded-xl h-full shadow-cus-shadow sidemenu bg-gray-900 transform duration-700 flex flex-col ${isOpen?'w-96   max-sm:w-full ':'w-12'}`}>

        <Link href="/dashboard" className={`flex gap-4 items-center ${isOpen?'p-6':'justify-center pt-4'} transform duration-500 select-none`}>
            <Image src='/logo.png' width={isOpen? 50:30} height={isOpen? 50:30} alt='logo' className='rounded-xl transform duration-500'/>
            {
                isOpen && 
                <motion.h2 className={`text-2xl text-nowrap font-writing `} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 ,transition:{delay:0.2}}}
                exit={{ opacity: 0 }}
                >Steam Play</motion.h2>
            }
        </Link>

        <div className='absolute left-0 bottom-0 p-3 max-sm:hidden'>
           <button onClick={()=>setIsOpen((prev)=>!prev)} className='text-white '>
            <Settings2Icon/>
           </button>
        </div>
        <div className='px-3 py-6'>
            {
                navItems.map((item,index)=>{
                    return (
                        
                            <Link href={item.path} key={index}  className={`cursor-pointer hover:shadow-cus-shadow shadow-gray-800 flex gap-4 items-center ${isOpen? 'p-3 mb-4':'mb-8'}  rounded-xl  ${pathname===item.path ? 'shadow-cus-shadow text-white':'text-slate-700'} transform duration-500`}>
                            <button className={`text-sm transform duration-500 `}>
                                {item.icon}
                            </button>
                            {
                                isOpen &&
                                <motion.p className={` text-nowrap ${pathname===item.path?'text-white':'text-slate-500'} transform duration-500`}
                             initial={{ opacity: 0 }}
                            animate={{ opacity: 1 ,transition:{delay:0.2}}}
                            exit={{ opacity: 0 }}
                            >{item.name}</motion.p>
                            }
                            </Link>
                       
                    )
                })
            }
        </div>
    </div>
    </AnimatePresence>
  )
}

export default SideMenu
