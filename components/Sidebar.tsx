'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { Black_Ops_One } from 'next/font/google'

const imageLoader = ({ src }: any) => {
    return `https://fahad9993.github.io/cv-new/assets/img/${src}`
  }

const black_ops_one = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-blackOps',
  })

export default function Sidebar() {
  return (
    <div>
        <Image
            loader={imageLoader}
            src='profilePic.png'
            width={100}
            height={100}
            className='rounded-full mx-auto'
            alt='user avatar'
        />
        <h3 className={`${black_ops_one.className} my-4 text-3xl font-medium tracking-wider font-cursive`}>Md. <span>Fahad</span> Rahman</h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Mechanical Engineer</p>
        <Link
            href='https://fahad9993.github.io/cv-new/assets/pdf/Fahad-cv.pdf'
            className='px-2 py-1 my-3 bg-gray-200 rounded-full flex justify-center items-center'>
            <GiTie className='w-6 h-6'/> Download Resume
        </Link>
        {/* social icons */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
            <Link href='https://www.facebook.com/fahad9993'>
                <AiFillFacebook className='w-8 h-8 cursor-pointer'/>
            </Link>
            <Link href='https://www.github.com/fahad9993'>
                <AiFillGithub className='w-8 h-8 cursor-pointer'/>
            </Link>
            <Link href='https://www.linkedin.com/in/fahad9993'>
                <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
            </Link>
        </div>
        {/* address */}
        <div
            className='py-4 my-5 bg-gray-200'
            style = {{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation className='w-8 h-8'/>
                <span>Dhaka, Bangladesh</span>
            </div>
            <p className='my-2'>fahad9993@gmail.com</p>
            <p className='my-2'>+880-01760979908</p>
            {/* buttons */}
            <button className='bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'>Email Me</button>
            <button className='bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white'>Toggle Theme</button>
        </div>

    </div>
  )
}
