import React from 'react'
import LocationImg from '../assets/images/svg/location-icon.svg'
import MessageImg from '../assets/images/svg/mail-icon.svg'
import TimeImg from '../assets/images/svg/time-icon.svg'
import CallImg from '../assets/images/svg/call-icon.svg'
import Logo from '../assets/images/svg/logo.svg'
import RightTick from '../assets/images/svg/right-tick-mark.svg'

function HeroSection() {
  return (
    <div className='hero-bg-img min_vh_100 h_lg_954 h_md_700 h_500 pt-14 d-flex flex-column'>
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
              <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey nav_text'>Home</a></li>
              <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey nav_text'>About us</a></li>
              <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey nav_text'>Services</a></li>
              <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey nav_text'>Pricing</a></li>
              <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey nav_text'>Blog</a></li>
              <li><a href="" className='fw-bold text-16 lh-19 ff-acumin clr-grey nav_text'>Contact us</a></li>
            </ul>
            <button className='fw-bold text-16 lh-19 ff-acumin clr-white call-btn d-lg-block d-none btn-style'>Call Us</button>
          </div>
        </div>
        </div>
        <div  className='d-flex flex-column flex_grow align_items_center justify_content_center pt-lg-87 pt-40  '>
          <div className='container'>
            <h1 className='fw-bold text-96 lh-115 ff-titling clr-white max-w-730 mx-auto text-center mb-0 pb-16'>Automotive Dry Ice Cleaning</h1>
            <p className='fw-normal text-20 lh-30 ff-acumin clr-white text-center mb-0 '>Discover the ultimate clean for your machine.
             </p>
              <p className='fw-normal text-20 lh-30 ff-acumin clr-white text-center pb-lg-40 pb-md-30 pb-15 mb-0'> No chemicals, no abrasives and no drama.</p>
              <div className='max-w-172 mx-auto'>
                <button className='fw-bold text-16 lh-19 ff-acumin clr-white btnn btn-style text-nowrap '>Get Instant Quote</button>
                </div>
                <div className='small_box mx-auto mt-lg-39 mt-md-25 mt-15'>
                  <div className='d-flex align-items-center justify-content-between flex-wrap gap-3'>
                    <div className='d-flex gap_12'>
                      <img src={RightTick} alt="RightTick"/>
                      <p className='fw-bold text-16 lh-24 ff-acumin clr-white mb-0'>Non-Abrasive</p>
                    </div>
                    <div className='d-flex gap_12 pt-sm-0 pt-3'>
                      <img src={RightTick} alt="RightTick"/>
                      <p className='fw-bold text-16 lh-24 ff-acumin clr-white mb-0'>No Chemicals</p>
                    </div>
                    <div className='d-flex gap_12 pt-sm-0 pt-3'>
                      <img src={RightTick} alt="RightTick"/>
                      <p className='fw-bold text-16 lh-24 ff-acumin clr-white mb-0'>No Mess</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
     
    </div>
  )
}

export default HeroSection