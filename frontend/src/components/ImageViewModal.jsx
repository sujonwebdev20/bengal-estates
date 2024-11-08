import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

const ImageViewModal = ({ isShow, setIsShow, images, thumbnail }) => {
  const allImages = [...images];
  allImages.unshift(thumbnail);

  if (isShow === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  const ImageModal = () => {
    return (
      <>
        <div
          onClick={() => setIsShow(false)}
          style={{
            backgroundColor: "#000000d6",
          }}
          className="fixed z-[99] top-0 left-0 right-0 bottom-0"
        ></div>
        <div className="fixed z-[99] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  lg:w-[60%] md:h-[40rem] max-lg:w-full max-lg:h-[20rem]">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {allImages?.map((image, index) => (
              <SwiperSlide onClick={() => setIsShow(true)} key={index}>
                <p className="absolute text-md text-right top-3 right-4 bg-gray-900 rounded-lg px-2 py-1">
                  {index + 1}/{allImages.length}
                </p>
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover selection:bg-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  };

  return <>{isShow && <ImageModal />}</>;
};

ImageViewModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  setIsShow: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageViewModal;
