import React from 'react';
import { m } from 'framer-motion';
import NavConfig from './navConfig';
import Image from 'next/image';
import img from '../../../public/assets/fruitzy.jpg';

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <m.nav
      animate={{
        x: !isOpen ? 0 : '-100%'
        // slow down the animation by a factor of 2
      }}
      transition={{ duration: 0.2 }}
      id="sidenav-6"
      className="fixed left-0 top-0 z-[1035] h-screen w-72 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800 py-5"
      data-te-sidenav-init
      data-te-sidenav-hidden={`${isOpen}`}
      data-te-sidenav-accordion="true"
    >
      <ul
        className="relative m-0 list-none px-[0.2rem]"
        data-te-sidenav-menu-ref
      >
        <li className="relative">
          <a
            className="flex gap-3 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref
          >
            <Image className="w-10 h-10" src={img} alt="img" />
            <h1 className="text-green-500 font-bold ">Fruitzy</h1>
          </a>
        </li>
        {NavConfig()?.map((e, i) => {
          return (
            <li className="relative" key={i} onClick={() => setIsOpen(true)}>
              <a
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                  {i === 0 ? (
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 1024 1024"
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M981.4 502.3c-9.1 0-18.3-2.9-26-8.9L539 171.7c-15.3-11.8-36.7-11.8-52 0L70.7 493.4c-18.6 14.4-45.4 10.9-59.7-7.7-14.4-18.6-11-45.4 7.7-59.7L435 104.3c46-35.5 110.2-35.5 156.1 0L1007.5 426c18.6 14.4 22 41.1 7.7 59.7-8.5 10.9-21.1 16.6-33.8 16.6z"
                        fill="#5F6379"
                      />
                      <path
                        d="M810.4 981.3H215.7c-70.8 0-128.4-57.6-128.4-128.4V534.2c0-23.5 19.1-42.6 42.6-42.6s42.6 19.1 42.6 42.6v318.7c0 23.8 19.4 43.2 43.2 43.2h594.8c23.8 0 43.2-19.4 43.2-43.2V534.2c0-23.5 19.1-42.6 42.6-42.6s42.6 19.1 42.6 42.6v318.7c-0.1 70.8-57.7 128.4-128.5 128.4z"
                        fill="#3688FF"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 12.75H8C7.80109 12.75 7.61032 12.671 7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697C7.61032 11.329 7.80109 11.25 8 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
                        fill="#000000"
                      />
                      <path
                        d="M19 8.25H8C7.80109 8.25 7.61032 8.17098 7.46967 8.03033C7.32902 7.88968 7.25 7.69891 7.25 7.5C7.25 7.30109 7.32902 7.11032 7.46967 6.96967C7.61032 6.82902 7.80109 6.75 8 6.75H19C19.1989 6.75 19.3897 6.82902 19.5303 6.96967C19.671 7.11032 19.75 7.30109 19.75 7.5C19.75 7.69891 19.671 7.88968 19.5303 8.03033C19.3897 8.17098 19.1989 8.25 19 8.25Z"
                        fill="#000000"
                      />
                      <path
                        d="M19 17.25H8C7.80109 17.25 7.61032 17.171 7.46967 17.0303C7.32902 16.8897 7.25 16.6989 7.25 16.5C7.25 16.3011 7.32902 16.1103 7.46967 15.9697C7.61032 15.829 7.80109 15.75 8 15.75H19C19.1989 15.75 19.3897 15.829 19.5303 15.9697C19.671 16.1103 19.75 16.3011 19.75 16.5C19.75 16.6989 19.671 16.8897 19.5303 17.0303C19.3897 17.171 19.1989 17.25 19 17.25Z"
                        fill="#000000"
                      />
                      <path
                        d="M5.00002 8.50002C4.87 8.50161 4.74093 8.47783 4.62002 8.43002C4.50052 8.37204 4.3895 8.29802 4.29002 8.21002C4.19734 8.11658 4.12401 8.00576 4.07425 7.88392C4.02448 7.76209 3.99926 7.63163 4.00002 7.50002C4.0037 7.23525 4.10728 6.98165 4.29002 6.79002C4.38389 6.69742 4.49637 6.62583 4.62002 6.58002C4.86348 6.48 5.13656 6.48 5.38002 6.58002C5.50277 6.62761 5.61491 6.69898 5.71002 6.79002C5.89275 6.98165 5.99633 7.23525 6.00002 7.50002C6.00078 7.63163 5.97555 7.76209 5.92579 7.88392C5.87602 8.00576 5.8027 8.11658 5.71002 8.21002C5.61054 8.29802 5.49951 8.37204 5.38002 8.43002C5.25911 8.47783 5.13003 8.50161 5.00002 8.50002Z"
                        fill="#000000"
                      />
                      <path
                        d="M5.00002 13C4.86934 12.9984 4.74024 12.9712 4.62002 12.92C4.49883 12.8693 4.38722 12.7983 4.29002 12.71C4.19734 12.6165 4.12401 12.5057 4.07425 12.3839C4.02448 12.262 3.99926 12.1316 4.00002 12C4.0037 11.7352 4.10728 11.4816 4.29002 11.29C4.38722 11.2016 4.49883 11.1306 4.62002 11.08C4.80104 10.996 5.00303 10.9682 5.20002 11L5.38002 11.06L5.56002 11.15C5.6124 11.1869 5.6625 11.227 5.71002 11.27C5.89749 11.4666 6.00144 11.7283 6.00002 12C6.00002 12.2652 5.89466 12.5195 5.70712 12.7071C5.51959 12.8946 5.26523 13 5.00002 13Z"
                        fill="#000000"
                      />
                      <path
                        d="M4.99999 17.5C4.86998 17.5016 4.7409 17.4778 4.61999 17.43C4.50049 17.372 4.38947 17.298 4.28999 17.21C4.20166 17.1128 4.13063 17.0012 4.07999 16.88C4.02708 16.7603 3.99976 16.6309 3.99976 16.5C3.99976 16.3691 4.02708 16.2397 4.07999 16.12C4.13063 15.9988 4.20166 15.8872 4.28999 15.79C4.43061 15.6513 4.60919 15.5573 4.80317 15.5199C4.99716 15.4825 5.19788 15.5034 5.37999 15.58C5.50274 15.6276 5.61488 15.699 5.70999 15.79C5.79832 15.8872 5.86935 15.9988 5.91999 16.12C5.97289 16.2397 6.00022 16.3691 6.00022 16.5C6.00022 16.6309 5.97289 16.7603 5.91999 16.88C5.86935 17.0012 5.79832 17.1128 5.70999 17.21C5.61655 17.3027 5.50573 17.376 5.38389 17.4258C5.26206 17.4756 5.1316 17.5008 4.99999 17.5Z"
                        fill="#000000"
                      />
                    </svg>
                  )}
                </span>
                <span>{e.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className="my-4" />
      <div className="px-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 px rounded-lg w-full">
          <h1 className="text-sm">Official Login</h1>
        </button>
      </div>
    </m.nav>
  );
}
