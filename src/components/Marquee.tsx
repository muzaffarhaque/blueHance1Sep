'use client';
import Image from 'next/image';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Spinner } from '@phosphor-icons/react';

export default function Marquee() {
  return (
    <>
      <Swiper
        spaceBetween={20} // Space between each slide
        slidesPerView={4} // Number of slides visible at the same time
        centeredSlides={false} // Set to true if you want the slides to be centered
        autoplay={{
          delay: 0, // No delay between transitions
          disableOnInteraction: false, // Prevent interaction from stopping autoplay
          pauseOnMouseEnter: false, // Optional: prevent pausing on mouse hover
        }}
        speed={2000} // Adjust the speed of the transition
        breakpoints={{
          768: {
            slidesPerView: 2, // Show 3 slides per view on screens 768px and up (tablets and desktops)
          },
          1024: {
            slidesPerView: 3, // Show 3 slides per view on screens 1024px and up (desktops)
          },
        }}
        loop={true}
        modules={[Autoplay]}
        className="marquee-container"
      >
        <SwiperSlide>
          <div className="marquee company-card b-e-lg">
            <Spinner size={42} className='icon' />
            Loghorizon1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="marquee company-card b-e-lg">
            <Spinner size={42} className='icon' />
            Loghorizon2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="marquee company-card b-e-lg">
            <Spinner size={42} className='icon' />
            Loghorizon3
          </div>
        </SwiperSlide>
        {/* Repeat slides for smooth looping */}
        <SwiperSlide>
          <div className="marquee company-card b-e-lg">
            <Spinner size={42} className='icon' />
            Loghorizon4
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="marquee company-card b-e-lg">
            <Spinner size={42} className='icon' />
            Loghorizon5
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="marquee company-card b-e-lg">
            <Spinner size={42} className='icon' />
            Loghorizon6
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
