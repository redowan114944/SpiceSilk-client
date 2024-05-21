import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import the autoplay styles if needed

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000, // Time delay between slides in milliseconds
                    disableOnInteraction: false, // Continue autoplay after user interactions
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src={slide5} alt="Meal" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Meal</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="Salads" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Pizza" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Soup" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Desert" />
                    <h3 className="text-3xl uppercase text-center -mt-16 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Desert</h3>
                </SwiperSlide>
                
            </Swiper>
        </section>
    );
};

export default Category;
