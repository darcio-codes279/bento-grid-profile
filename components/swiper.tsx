"use client";
import Image from "next/image";
import { images } from '@/lib/images';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core';

import { Pagination } from 'swiper/modules';

SwiperCore.use([Pagination]);

export default function Slider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="absolute inset-0">
            <Image
              width={100}
              height={100}
              src={image.src}
              alt={image.alt}
              className="rounded-lg object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}