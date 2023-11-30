'use client';
import React from 'react';
import { MotionContainer, varFade } from '@/component/animation';

export default function ImportAndExport() {
  const arrayEmpty = new Array(12);
  return (
    <div className="px-6 lg:px-20 py-12 mx-auto">
      <MotionContainer variants={varFade().inUp}>
        <h1 className="text-3xl font-bold text-green-500 text-center">
          Import and Export all fruits
        </h1>
      </MotionContainer>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {MOCK_DATA.map((e, i) => {
          return (
            <div key={i}>
              <MotionContainer variants={varFade().inUp}>
                <div className="w-full bg-white shadow-sm rounded-xl">
                  <div
                    className="h-60 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-xl shadow-sm"
                    style={{
                      backgroundImage: `url(${e.image})`
                    }}
                  >
                    {/* <div>
                    <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                      available
                    </span>
                  </div> */}
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <p className="text-gray-400 font-light text-xs text-center">
                      {e.categoay}
                    </p>
                    <h1 className="text-gray-800 text-center mt-1">{e.name}</h1>
                  </div>
                </div>
              </MotionContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    image:
      'https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    name: 'Cherry',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1604778234463-762cf933e155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    name: 'Papaya',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80',
    name: 'Avocado',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
    name: 'Lemon',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1516876319496-d5a849a2e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    name: 'Grapes',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1515968270336-3e94abcdac1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    name: 'Strawberry',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
    name: 'Apple',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1560951016-a733c05bc1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    name: 'Green Apple',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    name: 'Mango',
    categoay: 'Fruit'
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1674382739482-5d36b98d653a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
    name: 'Kiwi',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80',
    name: 'Pineapple',
    categoay: 'Fruit'
  },
  {
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    name: 'Watermelon',
    categoay: 'Fruit'
  }
];
