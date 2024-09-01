'use client'
import Image from 'next/image'
import React from 'react';
import logo from '../assets/images/blue_logo.jpg'
import { AppWindow, GraduationCap, Robot } from "@phosphor-icons/react/dist/ssr";
import { Article, BehanceLogo, FramerLogo, GlobeSimple, InstagramLogo, Layout, StarFour, Storefront, TwitterLogo, UserSquare, YoutubeLogo } from '@phosphor-icons/react';
// import { AppWindow, GraduationCap, Robot } from '@phosphor-icons/react';

export default function SideNave() {
  return (
    <div className="nav-comp">
      <div className='sub-side-nav '>
        <Image className='logo' src={logo} alt='logo' />
        <p className='logo-para'>We provide superior design education and cutting-edge AI solutions to empower professionals and elevate businesses.</p>

        <ul className='list-nav-ul'>
          <li className='b-18 fg'><GraduationCap className='icon' /> UX & AI Academy</li>
          <li className='b-18 fg'><Robot className='icon' /> AI Solutions</li>
          <li className='b-18 fg'><AppWindow className='icon' /> Tech Agency</li>
        </ul>
 
        <button className='primary-btn'>
          <StarFour size={24} />AI Assistant
        </button>

        <ul className='list-nav-ul grey-fade'>
          <li><UserSquare size={24} /> About us</li>
          <li><Article size={24} /> Blog</li>
        </ul>
        <div className="icons-frame">
          <BehanceLogo size={24} />
          <YoutubeLogo size={24} />
          <TwitterLogo size={24} />
          <GlobeSimple size={24} />
          <Storefront size={24} />
          <Layout size={24} />
          <InstagramLogo size={24} />
          <FramerLogo size={24} />
        </div>
        <p className='copy-right'>@ copyright 2024</p>
      </div>
    </div>
  )
}
