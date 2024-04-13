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
        <SwiperSlide className="">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            className="rounded-lg object-cover"
          />
      </SwiperSlide>
      <SwiperSlide className="">
        <Image
              src={images[1].src}
              alt={images[1].alt}
              className="rounded-lg object-cover"
            />
      </SwiperSlide>
      <SwiperSlide className="">
        <Image
              src={images[2].src}
              alt={images[2].alt}
              className="rounded-lg object-cover"
            />
      </SwiperSlide>

      {/* {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-lg object-cover"
            />
          </div>
        </SwiperSlide>
      ))} */}


    </Swiper>
  );
}