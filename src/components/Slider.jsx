import { Swiper, SwiperSlide } from "swiper/react"
import rectangle from "../../img/Rectangle 64.png"

import "swiper/css"

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => e.log(swiper)}
            >
                <SwiperSlide><img src={rectangle} alt="" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}

export default Slider