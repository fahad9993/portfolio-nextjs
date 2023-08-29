'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const imageLoader = ({ src }: any) => {
    return `https://fahad9993.github.io/cv-new/assets/img/${src}`
  }

export default function Sidebar() {
  return (
    <div>
        <Image
            loader={imageLoader}
            src='profilePic.png'
            width={200}
            height={200}
            alt='user avatar'
        />
        <h3>Md. <span>Fahad</span> Rahman</h3>
        <p>Mechanical Engineer</p>
        <p><GiTie className='w-6 h-6'/> Download Resume</p>
        {/* social icons */}
        <div>
            <Link href='https://www.facebook.com/fahad9993'>
                <AiFillFacebook className='w-8 h-8'/>
            </Link>
            <Link href='https://www.github.com/fahad9993'>
                <AiFillGithub className='w-8 h-8'/>
            </Link>
            <Link href='https://www.linkedin.com/in/fahad9993'>
                <AiFillLinkedin className='w-8 h-8'/>
            </Link>
        </div>
        {/* address */}
        <div>
            <div>
                <GoLocation className='w-8 h-8'/>
                <span>Dhaka, Bangladesh</span>
            </div>
            <p>fahad9993@gmail.com</p>
            <p>+880-01760979908</p>
            {/* buttons */}
            <button>Email Me</button>
            <button>Toggle Theme</button>
        </div>

    </div>
  )
}
