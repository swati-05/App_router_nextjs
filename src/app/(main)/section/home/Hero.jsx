'use client';
import React from 'react';
import { varFade, TextAnimate, MotionContainer } from '@/component/animation';
import Slider from 'react-slick';
import Image from 'next/image';

// bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/2

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <MotionContainer className="relative">
      {/* <Image
        src="/assets/School.svg"
        alt="schoolHero"
        className="bg-cover bg-center bg-no-repeat h-[100vh] lg:h-[100vh] w-full"
      /> */}
      <Slider {...settings} className="overflow-hidden">
        <div>
          <img
            alt="hero"
            src="https://cdn.pixabay.com/photo/2015/08/18/21/17/blueberries-894839_960_720.jpg"
            className="bg-cover bg-no-repeat h-[55vh] lg:h-85] w-full "
          />
        </div>
        <div>
          <img
            alt="hero"
            src="https://cdn.pixabay.com/photo/2016/03/05/21/42/appetite-1239054_960_720.jpg"
            className="bg-cover bg-no-repeat h-[55vh] lg:h-[85vh] w-full"
          />
        </div>
        <div>
          <img
            alt="hero"
            src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            className="bg-cover bg-no-repeat h-[55vh] lg:h-[85vh] w-full"
          />
        </div>
        <div>
          <img
            alt="hero"
            src="https://cdn.pixabay.com/photo/2016/03/05/21/47/berry-1239097_960_720.jpg"
            className="bg-cover bg-no-repeat h-[55vh] lg:h-[85vh] w-full"
          />
        </div>
      </Slider>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70">
        <div className="mx-auto w-full px-4 py-20 lg:py-0 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-10">
          <div className="w-full text-center sm:text-left">
            <h1 className="text-2xl font-extrabold sm:text-3xl mt-16 lg:mt-0">
              <span className="text-gray-400">
                <TextAnimate text="Fruitzy" variants={varFade().inUp} />
              </span>{' '}
              <span className="text-green-500">
                <TextAnimate text="Internationals" variants={varFade().inUp} />
              </span>{' '}
              <span className=" text-gray-400">
                <TextAnimate text="Pvt" variants={varFade().inUp} />
              </span>{' '}
              <span className=" text-green-500">
                <TextAnimate text="Ltd." variants={varFade().inUp} />
              </span>
            </h1>

            <p className="text-gray-400 mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Fresh fruits imported and exported.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              >
                Contact Now
              </a>
              {/* <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </MotionContainer>
  );
};

export default Hero;
