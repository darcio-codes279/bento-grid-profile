"use client";
import Image from "next/image";
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
    >
      <SwiperSlide>
      <Image
            src="/images/IMG_3627 2.JPG"
            alt="Description of the image"
            // width={200}
            // height={300}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
              >
            </Image>
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image
            src="/images/IMG_3628 2.JPG"
            alt="Description of the image"
            // width={200}
            // height={300}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
              >
            </Image>
        </SwiperSlide>
      <SwiperSlide>
      <Image
            src="/images/IMG_3629 2.JPG"
            alt="Description of the image"
            // width={200}
            // height={300}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
              >
            </Image>
      </SwiperSlide>
      <SwiperSlide>
      <Image
            src="/images/IMG_36262.JPG"
            alt="Description of the image"
            // width={200}
            // height={300}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
              >
            </Image>
      </SwiperSlide> */}
    </Swiper>
  );
}