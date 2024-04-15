// IMport React, Swiper components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

function Carousel({ CarouselArray }) {
  return (
    <>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        modules={[Autoplay, Pagination]}
        style={{ width: "80vw", height: "100vh" }}
        pagination={{ clickable: true }}
        slidesPerView={'auto'}
        loop={true}
      >
        {CarouselArray.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={item.image}
              style={{
                borderRadius: 6,
                display: "block",
                width: "100%",
                height: "60%",
                objectFit: "cover",
              }}
                />
                <Box sx={{my: 2}}>
                <Typography variant="h4" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.text}
            </Typography>    
                </Box>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
