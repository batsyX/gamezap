"use client"
import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay , EffectCoverflow ,EffectCube, Navigation} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./game.css"
import { PauseIcon, PauseOctagonIcon, PlayIcon } from 'lucide-react';
import { useState } from 'react';
import { useRef } from 'react';


const GameSwiper = ({games})=>{
    const ref = useRef();
    const [active,setActive]=useState(false);
    const handleToggle=()=>{
        setActive(!active);
    }
    return (
        <Swiper
        spaceBetween={30}
            effect={'coverflow'}
            grabCursor={true}
            navigation={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{ 
                delay:2500,
                disableOnInteraction:false,
                pauseOnMouseEnter:true,
                
            }}
            coverflowEffect={{
                rotate: 35,
                stretch: 10,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              
            }}
            loop={true}
            modules={[Autoplay,EffectCoverflow,Navigation]}
        >
            {games && games.length>0 &&
                games.map((game)=>(
                    <SwiperSlide key={game._id} className='select-none '>
                        <div ref={ref} className="relative gameSlider h-full">
                            <img src={game.img} className='rounded-3xl' alt="" />
                            <div className={`video ${active? 'active':'hidden'}`}>
                                <iframe src={`${game.trailer}`} frameborder="0"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                

                                ></iframe>
                            </div>
                            <div className="content">
                                <h2 className=' text-4xl mb-2'>{game.title}</h2>
                                
                                <div className="buttons flex gap-4 items-center">
                                    <a className='px-6 py-2 bg-[var(--second)] rounded-xl ' href="#">Order</a>
                                    <div className=' cursor-pointer' href="" >
                                                                                
                                        <span onClick={handleToggle} className={`pause ${active?'active':null}`}><PauseIcon/></span>
                                        <span onClick={handleToggle} className={`play ${active?null: 'active'}`}><PlayIcon/></span>
                                    
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default GameSwiper;
