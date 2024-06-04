import React from 'react'
import LocationImg from '../assets/images/svg/location-icon.svg'
import MessageImg from '../assets/images/svg/mail-icon.svg'
import TimeImg from '../assets/images/svg/time-icon.svg'
import CallImg from '../assets/images/svg/call-icon.svg'
import Logo from '../assets/images/svg/logo.svg'

function HeroSection() {
  return (
    <div className='hero-bg-img min-vh-100 pt-14'>
      <div className="container">
        <div className='d-flex align-items-center justify-content-lg-between gap-lg-0 gap-4 ps-5 pe-5 overflow-x-auto'>
            <div className='d-flex gap-10'>
             <img src={LocationImg} alt="LocationImg" />
             <p className='fw-normal text-16 lh-24 ff-acumin clr-white opacity_70 mb-0 text-nowrap'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
            </div>
            <div className='d-flex gap-10'>
             <img src={MessageImg} alt="LocationImg" />
             <p className='fw-normal text-16 lh-24 ff-acumin clr-white opacity_70 mb-0 text-nowrap'>book@dryiceblastingpro.co.uk</p>
            </div>
            <div className='d-flex gap-10'>
             <img src={TimeImg} alt="LocationImg" />
             <p className='fw-normal text-16 lh-24 ff-acumin clr-white opacity_70 mb-0 text-nowrap'>01865123456 </p>
            </div>
            <div className='d-flex gap-10'>
             <img src={CallImg} alt="CallImg" />
             <p className='fw-normal text-16 lh-24 ff-acumin clr-white opacity_70 mb-0 text-nowrap'>Mon - Fri: 9am to 5pm</p>
            </div>
        </div>
        <div className='nav_box mt-14'>
            <div className='d-flex align-items-center justify-content-between'>
              <a href=""><img src={Logo} alt="Logo" /></a> 
              <button className='fw-bold text-16 lh-19 ff-acumin clr-white call-btn diplay_property d_none'>Call Us</button>             
              <label For="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
               <input type="checkbox" id='menu-icon' hidden />
              <ul className='d-flex gap-24 align-items-center mb-0 ps-0 menulist'>
                <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey'>Home</a></li>
                <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey'>About us</a></li>
                <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey'>Services</a></li>
                <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey'>Pricing</a></li>
                <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey'>Blog</a></li>
                <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey'>Contact us</a></li>
              </ul>
              <button className='fw-bold text-16 lh-19 ff-acumin clr-white call-btn d-lg-block d-none'>Call Us</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection