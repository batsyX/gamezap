"use client"
import Link from "next/link"
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie";
import * as animationData from "@/public/lotties/AnimationLanding.json"
import { Webhook } from "lucide-react";
import {motion} from "framer-motion"

const Page = () => {
  const defaultOptions = {
		
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  };
  return (
    <>
    <div className="relative w-full h-full z-10">
      <div className="flex items-center justify-between px-6 pt-2">
          <img src="/logo.png" height={75} width={75} alt="" />
          <Link href="/dashboard">
            <motion.button 
            whileTap={{scale:0.9}}
            className="px-10 py-2 bg-[var(--second)] cus-border text-white font-bold">Sign up/Sign in</motion.button>
          </Link>
      </div>
      <div className="text-center mx-auto h-10  mt-16">
          <h1 className="text-6xl font-bauhaus mb-10 max-md:text-4xl max-md:mb-3">Buy Your Favourite Games</h1>

          <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-600 font-extrabold text-4xl font-bauhaus max-md:text-2xl">

          <Typewriter
                          options={{
                              strings:[
                                  "At one Place.",
                                  "All latest AAA titles",
                                  "Available at the best price."
                              ],
                
                              autoStart:true,
                              loop:true,
                              deleteSpeed:20
                          }}
                      />
          </div>
          <div className="p-4 flex justify-center w-full">
            <img src="/dash.png" width={600} height={400} alt="" className="rounded-xl"/>
          </div> 
          
          
      </div>
      <div className="text-purple-600 absolute bottom-4 flex justify-center w-full">
          <motion.div initial={{rotate:0}} animate={{rotate:360}} 
          transition={{duration:3,repeat:Infinity,repreatType:"reverse",ease:"linear"}}>
          <Webhook size={100} />
          </motion.div>
      </div>
    </div>
    <div className="w-full h-full absolute top-0 left-0 ">
        <Lottie 
          options={defaultOptions}
          />
        </div>                 
    </>
  )
}

export default Page