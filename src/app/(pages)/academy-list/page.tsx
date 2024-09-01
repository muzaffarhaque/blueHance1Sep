import Image from 'next/image'

import { StarFour } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import imge1 from '../../../assets/images/video-image.png'
import Blog from '@/components/Blog'
import CourceTab from '@/components/CourceTab'
export default function AcademyList() {
  return (
    <section className='academy-main-page'>
      <div className="hero-section-wrapper">
        <h1 className='large'>BlueHans Academy</h1>
        <p className='b-e-lg mb-0'>Our design course is a meticulously structured program aimed  to master the art and science of UX/UI design.  </p>
      </div>




     <CourceTab/>

      <Blog/>
    </section>
  )
}