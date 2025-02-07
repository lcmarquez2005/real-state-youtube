import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import { sliderDataImages } from './Slider.data';

export function Slider() {
    return (
        <Swiper
                slidesPerView={2.5}
                spaceBetween={20}
                freeMode={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Scrollbar]}
                className='h-[240px] md:h-[300px] w-[300px] xl:w-[500px]'
                grabCursor
            >
                { sliderDataImages.map(({id, urlImage}) => (
                    <SwiperSlide key={id}>
                        <div className="relative w-[120px] md:w-auto h-[180px] md:h-[280px]">
                            <Image 
                                src={`/assets/houses/${urlImage}`} 
                                alt="House" 
                                fill 
                                className="rounded-xl object-cover"
                            />
                        </div>                    
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}
