"use client"
import { createContext,useContext,useState } from "react"

const Context = createContext();

const Provider = ({children}) => {
    const [heartList, setHeartList] = useState([]);
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [total, setTotal] = useState(0);

    return(
        <Context.Provider value={{heartList,setHeartList,cart,setCart,isOpen,setIsOpen,total,setTotal}}>
            {children}
        </Context.Provider>
    )       
}

export default Provider

export const useProviderContext = () => {
    return useContext(Context);
}