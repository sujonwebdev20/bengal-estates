import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../css/ImageSlider.css";
function ImageSlider() {
  return (
    <div className="home_slider lg:mb-20 min-[320px]:mb-[3rem]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/trending-man.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/money-tree.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/house.jpg" alt="House" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/house.jpg" alt="House" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
