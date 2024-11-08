import Container from "./shared/Container";
import { useGetAllNewsQuery } from "../redux/features/newsApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const NewsCarousel = () => {
  const { data } = useGetAllNewsQuery();

  return (
    <Container>
      <div className="w-full min-h-[50vh] mx-auto mt-10 mb-28 rounded-xl overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          keyboard={SwiperSlide}
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
          {data?.data?.length > 0 &&
            data?.data.slice(0, 6).map((news) => (
              <SwiperSlide key={news?._id}>
                <div
                  key={news?._id}
                  className="flex items-center justify-center h-[50vh] relative"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-full w-full object-cover opacity-40"
                  />
                  <h3 className="absolute left-0 top-0 text-3xl text-start font-semibold p-10 leading-10 xl:w-3/4">
                    {news.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default NewsCarousel;
