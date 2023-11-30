'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import NavBar from './Navbar';
import img from '../../../public/assets/fruitzy.jpg';
import Footer from './Footer';
import Sidebar from './Sidebar';

const TopNavbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full h-full bg-white">
        <div
          onClick={() => setIsOpen(true)}
          className={`bg-gray-900 opacity-50  fixed inset-0 z-50
            ${isOpen ? 'hidden' : null}`}
          id="sidebarBackdrop"
        />
        <div className="bg-white dark:bg-gray-800 shadow-none absolute z-10 w-full h-20 lg:h-24  top-0 bottom-0">
          <div className="container px-6 lg:px-14 py-2 mx-auto ">
            <div className="flex justify-between items-center mt-1">
              <div>
                <a href="#">
                  <Image
                    src={img}
                    height={60}
                    width={60}
                    alt="img"
                    // style={{ padding: 5, height: 75, width: 75 }}
                  />
                </a>
              </div>
              <div className="hidden lg:flex">
                <input
                  type="text"
                  className="rounded-full w-full py-2 pl-10 pr-4 text-gray-700 bg-white border  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Search"
                />
              </div>
              <div className="flex gap-1">
                <Image
                  src="/assets/whatsappLogo.svg"
                  height={40}
                  width={40}
                  alt="img"
                />
                <h1 className="text-gray-500 dark:text-gray-500 font-semibold">
                  +91 9709227856
                  <p className="text-sm">Customer Support</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-20 lg:h-24 dark:bg-gray-600 bg-white" />
        </div>
        <div className="sticky top-0 z-10 overflow-hidden max-h-screen overflow-y-auto">
          <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        {children}

        <Footer />
      </div>
    </>
  );
};

export default TopNavbar;
