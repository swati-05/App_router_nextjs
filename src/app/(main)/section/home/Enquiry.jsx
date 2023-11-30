'use client';
import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { MotionContainer, varFade } from '@/component/animation';

export default function Enquiry() {
  return (
    <MotionContainer>
      <div className="px-6 lg:px-20 py-20 mt-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <MotionContainer variants={varFade().inUp}>
            <div className="flex items-center gap-3">
              <div>
                <svg
                  fill="currentColor"
                  height={40}
                  width={40}
                  className="text-green-300"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 424.06 424.06"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M423.125,36.86l-0.8-7.6c-1.6-15.6-14.4-27.6-30.4-28.8l-6.4-0.4c-19.2-0.8-38,6.4-51.6,20l-64,63.6l-209.6-0.4
			c-17.6,0-34.8,7.2-47.6,20l-8.8,8.8c-2.8,2.8-4,7.6-3.2,11.6c1.2,4,4,7.2,8,8.4l166.8,45.6l-38.8,38.8l-70.4,2.4
			c-7.2,0-14,2.8-19.2,8.4l-6.8,6.8c-2.8,2.8-4,7.2-3.2,11.2c1.2,4,4,6.8,7.6,8.4l89.6,34l36,92.8c1.6,4,5.2,6.8,9.2,7.2
			c4,0.4,7.6-0.8,10.4-4l7.2-7.2c4.8-4.8,7.6-11.2,8.4-19.2l2.4-70.8l39.2-38.4l45.2,167.2c1.2,4,4.4,7.2,8.4,8.4
			c1.2,0.4,2,0.4,3.2,0.4c3.2,0,6.4-1.2,8.8-3.6l8.8-8.8c12.8-12.8,20-30,20-48v-209.6l62-62.4
			C418.325,77.26,425.525,56.86,423.125,36.86z M392.325,80.46l-64.8,64.8c-1.6,1.6-2.4,3.6-2.4,5.6v212.8c0,14-5.6,26.8-15.2,36.8
			l-4,4l-47.6-173.2c-0.8-2.8-2.8-4.8-5.6-5.6c-0.8,0-1.2-0.4-2-0.4c-2,0-4,0.8-5.6,2.4l-51.2,50.4c-1.6,1.6-2.4,3.2-2.4,5.6
			l-2.4,73.6c0,2.4-0.8,6-3.6,8.4l-2.8,2.8l-34.8-90c-0.8-2-2.4-3.6-4.8-4.4l-86.8-33.2l2.4-2.4c1.2-1.2,4.4-3.6,8.4-3.6l74-2.4
			c2,0,4-0.8,5.2-2.4l50.8-50.8c2-2,2.8-4.8,2-7.6c-0.8-2.8-2.8-4.8-5.6-5.6l-173.6-47.6l4-4c9.6-9.6,22.8-15.2,36.4-15.2l212.8,0.4
			c2,0,4-0.8,5.6-2.4l66.4-66c10.4-10.4,24.8-16,39.6-15.2l6.4,0.4c8,0.4,14.4,6.8,15.2,14.4l0.8,7.6
			C408.725,54.06,403.525,69.26,392.325,80.46z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-gray-600 uppercase">
                  Shipping
                </h1>
                <p className="text-sm text-gray-400">
                  Befresh Logistics - 24/7
                </p>
                <p className="text-sm text-gray-400">
                  Availability. Fast & Flexible
                </p>
              </div>
            </div>
          </MotionContainer>
          {/* support */}
          <MotionContainer variants={varFade().inUp}>
            <div className="flex items-center gap-3">
              <div>
                <svg
                  fill="currentColor"
                  className="text-green-300"
                  width={40}
                  height={40}
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM20 2.593c4.507 1.343 8.052 4.9 9.397 9.407h-6.486c-0.701-1.204-1.706-2.209-2.91-2.908zM21.989 16.006c0 3.311-2.681 5.994-5.989 5.994s-5.989-2.683-5.989-5.994 2.681-5.994 5.989-5.994c3.307 0 5.989 2.684 5.989 5.994zM14 2.154c0.653-0.094 1.32-0.144 2-0.144s1.346 0.051 2 0.144v6.119c-0.64-0.165-1.308-0.262-2-0.262s-1.36 0.097-2 0.262v-6.119zM12 2.593v6.499c-1.205 0.7-2.21 1.704-2.91 2.908h-6.487c1.345-4.507 4.89-8.063 9.397-9.407zM2.010 16.005c0-0.682 0.058-1.349 0.152-2.005h6.106c-0.166 0.641-0.257 1.312-0.257 2.005 0 0.69 0.091 1.357 0.255 1.995h-6.105c-0.093-0.652-0.151-1.317-0.151-1.995zM12 29.416c-4.511-1.344-8.056-4.906-9.4-9.416h6.483c0.701 1.208 1.708 2.217 2.916 2.919v6.498zM18 29.855c-0.654 0.093-1.321 0.145-2 0.145s-1.347-0.052-2-0.145v-6.118c0.64 0.166 1.308 0.262 2 0.262s1.36-0.097 2-0.262v6.118zM20 29.416v-6.498c1.208-0.701 2.216-1.71 2.916-2.919h6.483c-1.343 4.511-4.89 8.073-9.399 9.416zM23.735 18c0.164-0.637 0.255-1.305 0.255-1.995 0-0.694-0.091-1.364-0.258-2.005h6.107c0.094 0.656 0.152 1.323 0.152 2.005 0 0.678-0.058 1.343-0.151 1.995h-6.105z" />
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-gray-600 uppercase">
                  SUPPORT 24/7
                </h1>
                <p className="text-sm text-gray-400">
                  Contact us 24 hours a day, 7
                </p>
                <p className="text-sm text-gray-400">days on +917979014195</p>
              </div>
            </div>
          </MotionContainer>
          {/* end support */}
          {/* our price */}
          <MotionContainer variants={varFade().inUp}>
            <div className="flex items-center gap-3">
              <div>
                <svg
                  fill="currentColor"
                  className="text-green-300"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2,11.308a1,1,0,0,0,.293.707l9.692,9.692a1,1,0,0,0,1.414,0L21.707,13.4a1,1,0,0,0,0-1.414L12.015,2.293A1,1,0,0,0,11.308,2H3A1,1,0,0,0,2,3ZM4,4h6.894l8.692,8.692-6.894,6.894L4,10.894ZM9.923,7.154a1.958,1.958,0,1,1-2.769,0A1.957,1.957,0,0,1,9.923,7.154Z" />
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-gray-600 uppercase">
                  OUR PRICE
                </h1>
                <p className="text-sm text-gray-400">
                  Price Low Quality High get price
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <PhoneIcon height={16} width={16} />
                  +917979014195
                </p>
              </div>
            </div>
          </MotionContainer>
          {/* end our price */}
        </div>
      </div>
    </MotionContainer>
  );
}
