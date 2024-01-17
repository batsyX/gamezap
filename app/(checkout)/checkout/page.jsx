"use client"
import Lottie from "react-lottie";
import * as animationData from "@/public/lotties/Animation3.json"
import * as animationData2 from "@/public/lotties/Animation.json"
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { ArrowBigLeftIcon } from "lucide-react";
import { motion } from "framer-motion";


export default function App() {
	const defaultOptions = {
		
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  };
	  const defaultOptions2 = {
		loop: true,
		autoplay: true,
		animationData: animationData2,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  }
	
	return (
	  <div className="h-full flex flex-col justify-center items-center gap-14 bg-gray-900 overflow-y-auto scrollbar">
	  	<Link href="/dashboard" className="absolute top-0 left-0 p-6 text-white">
			<motion.button
			 whileTap={{ scale: 0.9 }}
			 className="px-6 py-4 bg-[var(--second)] rounded-xl flex items-center ">

			<ArrowBigLeftIcon/>
			<p>Return to Dashboard</p>
			
			</motion.button>
		</Link>
		<Lottie 
		  options={defaultOptions}
		  height={150}
		  width={150}
		/>
		  <h1 className="text-white text-4xl font-bauhaus ">
                    <Typewriter
                        options={{
                            strings:[
                                "Checkout Success!",
                                "Thank you for your purchase!"
                            ],
							
                            autoStart:true,
                            loop:true,
                            deleteSpeed:20
                        }}
                    />
                </h1> 
		
		<Lottie 
		  options={defaultOptions2}
		  height={350}
		  width={350}/>
	  </div>
	);
  }