"use client"
import "./dash.css"

import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";

const layout = ({children}) => {
  return (
    <div className="dash">
          <SideMenu />   
          <div className="relative w-full rounded-xl h-full shadow-cus-shadow bg-gray-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-14">
              <Header />
            </div>
            <AnimatePresence>
              {children}
            </AnimatePresence>
            
          </div>
            
    </div>
  )
}

export default layout