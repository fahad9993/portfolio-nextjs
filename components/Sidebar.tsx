import React from 'react'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <div>
        <Image
            src='https://fahad9993.github.io/cv-new/assets/img/profilePic.png'
            width={200}
            height={200}
            alt='user avatar'
        />
        <h3>Md. <span>Fahad</span> Rahman</h3>
        <p>Mechanical Engineer</p>
        <p>Download Resume</p>
    </div>
  )
}
