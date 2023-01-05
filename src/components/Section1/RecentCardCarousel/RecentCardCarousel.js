import React, { useRef, useState } from "react";
import './RecentCardCarousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import videoicon from "../../assets/icons/videoicon.svg";
function RecentCardCarousel(props) {

    const [sliderData, setSliderData] = useState([
        { name: "name1", date: "sample date", participants: "number" },
        { name: "name2", date: "sample date", participants: "number" },
        { name: "name3", date: "sample date", participants: "number" },
        { name: "name4", date: "sample date", participants: "number" },
        { name: "name5", date: "sample date", participants: "number" },
    ])


    return (
        <div className="flex items-center justify-center mt-9">
            <div className="flex items-center justify-center w-4/5 rounded-[12px] flex-col">
                <div className='flex items-center  w-full'>
                    <h1 className='text-[21px] text-[#59595B] font-[600]'>MIS ACTIVIDADES RECIENTES</h1>
                    <p className='ml-auto text-[#898989] underline' >Ver todas</p>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        sliderData.map(data => {
                            return (
                                <SwiperSlide>
                                    <div className="flex w-[285px] shadow-md h-52 rounded-[9px] flex-col p-5 bg-white mt-8">
                                        <div className="flex-1 items-start ">
                                            <div className="flex flex-row gap-3">
                                                <img src={videoicon} className="w-[20px]"/>
                                                <p className="text-[18px]">El Arte de Respirar</p>
                                            </div>
                                            <div className="text-[16px] text-[#959595]">
                                                <p>14 al 17 de mayo, 2022</p>
                                                <p>CABA, Argentina</p>
                                            </div>
                                        </div>
                                        <div className="flex-2 items-end ">
                                            <div className="flex flex-row text-[14px]">
                                                <p className="text-[#44B741] ">Promoción</p>
                                                <p className="text-[#898989] "> • 80 participantes</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default RecentCardCarousel;