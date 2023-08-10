import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderPreview from "./SliderPreview";

const Slider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonial data from a JSON file (replace with your API endpoint)
    fetch("comments.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("testi", data);
        setTestimonials(data);
      })
      .catch((error) =>
        console.error("Error fetching testimonial data:", error)
      );
  }, []);

  const chunkArray = (arr, size) => {
    return arr.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
      []
    );
  };

  const testimonialChunks = chunkArray(testimonials, 3); // Change the size to 3

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialChunks.map((chunk, index) => (
        <SwiperSlide key={index}>
          <div className="py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> {/* Change grid-cols-2 to grid-cols-3 */}
              {chunk.map((data) => (
                <SliderPreview key={data.id} data={data} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
