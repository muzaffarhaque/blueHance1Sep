import React from 'react'
import Image from 'next/image'
import { StarFour } from '@phosphor-icons/react/dist/ssr'
import imge1 from '../assets/images/video-image.png'
import Link from 'next/link'

export default function CourceTab() {
  return (
    <div className='courses-main-section-frame'>
        
      <div className='Courses-main-wraper'>
        <h4>UX & UI Design courses</h4>
        <ul className='all-courses-buttons-wrapper'>
         <a href="#first"><li className='coursesse-buttons'>Foundation</li></a> 
         <a href="#second"><li className='coursesse-buttons'>Advanced</li></a> 
         <a href="#third"> <li className='coursesse-buttons'>Expert</li></a> 
        </ul>
      </div>


      <div id='first' className='courses-details-wraper'>
        <div className='corsese-details-wraper-main'>
         
            <p className='corsese-details-wraper-main-heading m-0'>Level One  Foundation</p>
            <h3 className='courses-main-heading'>Foundations of UX & UI Design</h3>
          
          <div className='courses-fees-section'>
            <div className='couser-fees-right-section'>
              <div className='courses-Prize-section'>
                <p className='m-0 b-18'>Course fees</p>
                <p className='m-0 b-18'>₹50,000</p>
              </div>
              <h3>₹ 21,000</h3>
              <div className='couses-money-back'>
                Money-Back Guarantee
              </div>
              <p className='courses-details-section-main b-18'>Our Level One Foundations of UX/UI Design course at BlueHans covers the essentials of user experience and interface design. </p>
            </div>
            <Image src={imge1} width={300} className='img-section' height={499} alt='image'/>
         
          </div>
          <div className='courses-details-section mb-wrap'>
        <Link href={{
                    pathname: `academy-list/${encodeURIComponent('Foundations of UX & UI Design')}`,
                    query: ''
                  }}>
            <button className='primary-btn course-button'>
              <StarFour size={24} />Course details
            </button>
        </Link>
            <p className='courses-last-text b-18'>If you are already a UX/UI Designer and your foundation is strong then you may enrol for level Two course</p>
          </div>
        </div>

      </div>

      <div id='second' className='courses-details-wraper'>
        <div className='corsese-details-wraper-main'>
         
            <p className='corsese-details-wraper-main-heading m-0'>Level One  Foundation</p>
            <h3 className='courses-main-heading'>Foundations of UX & UI Design</h3>
          
          <div className='courses-fees-section'>
            <div className='couser-fees-right-section'>
              <div className='courses-Prize-section'>
                <p className='m-0 b-18'>Course fees</p>
                <p className='m-0 b-18'>₹50,000</p>
              </div>
              <h3>₹ 21,000</h3>
              <div className='couses-money-back'>
                Money-Back Guarantee
              </div>
              <p className='courses-details-section-main b-18'>Our Level One Foundations of UX/UI Design course at BlueHans covers the essentials of user experience and interface design. </p>
            </div>
            <Image src={imge1} width={300} className='img-section' height={499} alt='image'/>
         
          </div>
          <div className='courses-details-section mb-wrap'>
            <button className='primary-btn course-button'>
              <StarFour size={24} />Course details
            </button>
            <p className='courses-last-text b-18'>If you are already a UX/UI Designer and your foundation is strong then you may enrol for level Two course</p>
          </div>
        </div>

      </div>

      <div id='third' className='courses-details-wraper'>
        <div className='corsese-details-wraper-main'>
         
            <p className='corsese-details-wraper-main-heading m-0'>Level One  Foundation</p>
            <h3 className='courses-main-heading'>Foundations of UX & UI Design</h3>
          
          <div className='courses-fees-section'>
            <div className='couser-fees-right-section'>
              <div className='courses-Prize-section'>
                <p className='m-0 b-18'>Course fees</p>
                <p className='m-0 b-18'>₹50,000</p>
              </div>
              <h3>₹ 21,000</h3>
              <div className='couses-money-back'>
                Money-Back Guarantee
              </div>
              <p className='courses-details-section-main b-18'>Our Level One Foundations of UX/UI Design course at BlueHans covers the essentials of user experience and interface design. </p>
            </div>
            <Image src={imge1} width={300} className='img-section' height={499} alt='image'/>
         
          </div>
          <div className='courses-details-section mb-wrap'>
            <button className='primary-btn course-button'>
              <StarFour size={24} />Course details
            </button>
            <p className='courses-last-text b-18'>If you are already a UX/UI Designer and your foundation is strong then you may enrol for level Two course</p>
          </div>
        </div>

      </div>
    </div>
  )
}
