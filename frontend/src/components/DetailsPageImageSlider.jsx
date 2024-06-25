import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageViewModal from "./ImageViewModal";
import { useState } from "react";

const DetailsPageImageSlider = ({ images, thumbnail }) => {
  const allImages = [...images];
  allImages.unshift(thumbnail);

  const [isShow, setIsShow] = useState(false);
  const [indexState, setIndexState] = useState();

  const imageClickHandler = (bool, index) => {
    setIsShow(bool);
    setIndexState(index);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {allImages.map((image, index) => (
          <SwiperSlide
            onClick={() => imageClickHandler(true, image)}
            key={index}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover selection:bg-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageViewModal
        isShow={isShow}
        setIsShow={setIsShow}
        images={images}
        thumbnail={thumbnail}
        indexState={indexState}
        setIndexState={setIndexState}
      />
    </>
  );
};

export default DetailsPageImageSlider;
