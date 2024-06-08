import React from 'react'
import Layer1 from '../assets/images/png/orange-layer-1.png'
import Layer2 from '../assets/images/png/orange-layer-2.png'
import IceImg from '../assets/images/png/understanding-img-1.png'
import Iceimg2 from '../assets/images/png/understanding-img-2.png'

function Understanding() {
  return (
    <div className='position-relative '>
       <div className='layer1 pos ition-absolute w-100'>
         <img className='w-100' src={Layer1} alt="Layer1" />
       </div>
      
    <div className='understanding-bg-clr h_xl_1024 mb_1 '>    
      <div className="container">
        <h1 className='fw-bold text-48 lh-57 ff-titling clr-white text-center mt_1'>Understanding Dry Ice Blasting</h1>
        <div className="row flex-lg-row flex-column-reverse ">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center pt-xl-137 pt-lg-60 pt-20">
            <div className='blank'>
              <h3 className='fw-bold text-24 lh-36 ff-acumin clr-white'>What is Dry Ice Blasting?</h3>
              <p className='fw-normal text-18 lh-27 ff-acumin opacity_90 clr-white max-w-558'>Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-cenetr justify-content-center">
            <div className='Ice_pstn position_absolute'>
              <img className='w-100 max_w_lg_728 max_w_452' src={IceImg} alt="IceImg" />
              </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 d-flex align-items-cenetr justify-content-center">
            <div className='ice_pstn-2 position_absolute max_w_lg_728 max_w_452'>
              <img className='max_w_lg_728 max_w_400 max_w_lg_452 w-100' src={Iceimg2} alt="Iceimg2" />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center pt-xl-217 pt-lg-129 pt-20">
            <div className='blank'>
              <h3 className='fw-bold text-24 lh-36 ff-acumin clr-white'>How Does Dry Ice Blasting Work?</h3>
              <p className='fw-normal text-18 lh-27 ff-acumin opacity_90 clr-white max-w-558 mb-0'>The process begins with the dry ice pellets being accelerated in a jet of compressed air, similar to sandblasting but with a crucial difference. Upon contact with the surface, the dry ice pellets undergo sublimation - they turn directly from solid to gas without becoming liquid. This reaction creates a micro-explosion on the surface, lifting dirt and contaminants away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='layer2 pos ition-absolute w-100'>
         <img className='w-100' src={Layer2} alt="Layer2" />
       </div>
    </div>
  )
}

export default Understanding