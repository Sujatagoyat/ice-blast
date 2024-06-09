import React from 'react'
import Behindimg from '../assets/images/png/behind-img.png'
import behindImg2 from '../assets/images/png/behind-car-img.png'
import Layer1 from  '../assets/images/png/behind-layer-1.png'
import Layer2 from '../assets/images/png/behind-layer-2.png'

function BehindScenes() {
  return (
    <div className='blank'>
      <img className='w-100' src={Layer1} alt="Layer1" />
    <div className='behind-bg-img mb_1'>
        <div className="container">
          <h1 className='fw-bold text-48 ff-titling clr-white lh-57  text-center mb-0 '>Behind the Scenes
         </h1>
          <h1 className='fw-bold text-48 ff-titling clr-white lh-57  text-center '>
          Dry Ice Blasting a Car</h1>
          <p className='fw-400 text-16 lh-24 clr-white max-w-592 mx-auto text-center mb-lg-50 mb-md-28 mb-10 '>From the initial setup to the final sweep, discover how we elevate car cleaning to an art form, delivering immaculate results every time.</p>
          <div className='d-flex align-items-center justify-content-center'>
            <img className='w-100 max-w-lg-1140 mx-auto' src={behindImg2} alt="Behindimg" />
            </div>
            <p className='fw-bold text-16 lh-24 ff-acumin clr-white mb-0 text-center mt-lg-40 mt-md-20 mt-10 '>Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.</p>
            <div className='max-w-172 mx-auto '>
                <button className='fw-bold text-16 lh-19 ff-acumin clr-white btnn btn-style text-nowrap mt-md-20 mt-10 '>Get Instant Quote</button>
            </div>
        </div>
        </div>
        <img className='w-100' src={Layer2} alt="Layer2" />
    </div>
  )
}

export default BehindScenes