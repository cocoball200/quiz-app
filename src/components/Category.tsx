'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addQuizCategory } from '@/store/features/quiz/quizSlice';
import Image from 'next/image';


const CATEGORY_DATA = [
  {
    key: 21,
    value: 'Sports',
  },
  {
    key: 23,
    value: 'History',
  },
  {
    key: 27,
    value: 'Animals',
  },
]

export default function Example() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCategorySelect = ({ key, value }: { key: number, value: string }) => {
    dispatch(addQuizCategory({ key, value }));
    router.push('/difficulty');
  };


  return (
    <div className="">
      <div className='h-[240px] rounded-b-3xl bg-purple-500 static'></div>
      <div className="flex justify-center">
        <Image src='/logo.png' width={40} height={40} alt="logo" className='z-50 relative top-[-216px]' />
      </div>
      <div className='h-[220px] z-0 relative top-[-82px] bg-white rounded-3xl mx-auto w-[96%] shadow-lg flex justify-center items-center'>
        <h1 className='text-xl font-semibold'>Select Category</h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 lg:mx-0 lg:max-w-none">
          {CATEGORY_DATA.map((category, index) => (
            <button className="flex flex-col items-start justify-between cursor-pointer" key={category.key} onClick={() => handleCategorySelect(category)}>
              <div className="relative w-full hover:border-purple-500 hover:border-2 hover:rounded-2xl border-0">
                <h3 className=' text-black text-lg text-left mx-6 py-2'><span className='mx-2'>{index + 1}.</span>{category.value}</h3>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </button>

          ))}
        </div>
      </div>
    </div>
  )
}
