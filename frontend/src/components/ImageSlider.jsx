import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../css/ImageSlider.css";
function ImageSlider() {
  const slidingImages = [
    "/images/home_slide_images/3.jpg",
    "/images/home_slide_images/1.jpg",
    "/images/home_slide_images/2.jpg",
    "/images/home_slide_images/4.jpg",
    "/images/home_slide_images/5.jpg",
    "/images/home_slide_images/6.jpg",
    "/images/home_slide_images/7.jpg",
    "/images/home_slide_images/8.jpg",
    "/images/home_slide_images/9.jpg",
    "/images/home_slide_images/10.jpg",
  ];

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
        {slidingImages.map((item, index) => (
          <SwiperSlide key={index + 1}>
            <img src={item} alt="Home Property" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
