import React from 'react'
import FutureRight from '../assets/images/svg/future_right.svg'
import FutureCarImg from '../assets/images/png/future_car_img.png'

function FutureCar() {
  return (
    <div className='future-bg-img'>
        <div className="container">
            <div className="row pt-lg-99 pt-md-60 pt-40 flex-lg-row flex-column-reverse row-gap-4">
                <div className="col-lg-6 d-flex flex-column align-items-end justify-content-center">
                <div className='blank'>
                  <h1 className='fw-bold text-48 lh-57 ff-titling clr-black max-w-351 '>The Future of Car Cleaning</h1>
                  <p className='fw-noraml text-16 lh-24 ff-acumin clr-black opacity_70 max-w-558 mb-0 pb-md-4 pb-2'>No need to be overwhelmed by the thought of harsh chemicals and abrasive cleaning methods. Our dry ice blasting leaves your car spotless, reaching where no cloth can.</p>
                  <div className='d-flex align-items-center gap-md-16 gap-10'>
                    <img src={FutureRight} alt="FutureRight" />
                    <p className='fw-bold text-16 lh-24 ff-acumin clr-black mb-0 pb-1'>Gentle Yet Powerful</p>
                  </div>
                  <p className='fw-normal text-16 lh-24 ff-acumin clr-black opacity_70 max-w-518 mb-0 ps-lg-38 pb-md-16 pb-10'>Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.</p>
                  <div className='d-flex align-items-center gap-md-16 gap-10'>
                    <img src={FutureRight} alt="FutureRight" />
                    <p className='fw-bold text-16 lh-24 ff-acumin clr-black mb-0 pb-1'>Precision Cleaning</p>
                  </div>
                  <p className='fw-normal text-16 lh-24 ff-acumin clr-black opacity_70 max-w-518 mb-0 ps-lg-38 pb-md-16 pb-10'>See how accurately we target the grunge zones,ensuring every inch of your cars undercarriage and engine is meticulously cleaned.</p>
                  <div className='d-flex align-items-center gap-md-16 gap-10'>
                    <img src={FutureRight} alt="FutureRight" />
                    <p className='fw-bold text-16 lh-24 ff-acumin clr-black mb-0 pb-1'>Safe for AlI Vehicles</p>
                  </div>
                  <p className='fw-normal text-16 lh-24 ff-acumin clr-black opacity_70 max-w-518 mb-0 ps-lg-38 pb-md-16 pb-10'>Perfect for all car types, from family hatchbacks to classic cars and high-performance vehicles.</p>
                  <div className='d-flex align-items-center gap-md-16 gap-10'>
                    <img src={FutureRight} alt="FutureRight" />
                    <p className='fw-bold text-16 lh-24 ff-acumin clr-black mb-0 pb-1'>Eco-Friendly Approach</p>
                  </div>
                  <p className='fw-normal text-16 lh-24 ff-acumin clr-black opacity_70 max-w-518 mb-0 ps-lg-38 pb-md-16 pb-10'>Notice the absence of water or chemical runoff, showcasing our commitment to an environmentally responsible cleaning process.</p>
                </div>
                </div>
                <div className="col-lg-6 d-flex align-items-lg-start justify-content-center">
                  <img className='w-100 max_w_md_558 max-w-289' src={FutureCarImg} alt="FutureCar" />
                </div>               
                </div>
                <p className='fw-bold text-16 lh-24 ff-acumin clr-blue text-center mb-0 pt-lg-80 pt-md-30 pt-10'>Like What You See? Get an Instant Quote</p>
                <div className='max-w-172 mx-auto '>
                <button className='fw-bold text-16 lh-19 ff-acumin clr-white btnn btn-style text-nowrap mt-md-20 mt-10 '>Get Instant Quote</button>
            </div>
            
        </div>
    </div>
  )
}

export default FutureCar