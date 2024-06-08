import React from 'react'
import Chooseimg from '../assets/images/png/Choose-car-img.png'
import CarImg from '../assets/images/svg/car-img.svg'
import CarImg2 from '../assets/images/svg/car-2.svg'
import Residue from '../assets/images/svg/Residue-3.svg'
import SafeImg from '../assets/images/svg/safe-svg.svg'


function WhyChoose() {
  return (
    <div>
      <div className='container'>
        <h1 className='fw-bold text-48 lh-57 clr-black ff-titling text-center mb-lg-48 mb-md-28 mb-15'>Why Choose Dry Ice Blasting for Your Car?</h1>
        <div className="row flex-lg-row flex-column-reverse row-gap-lg-0 row-gap-md-5 row-gap-4">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <div className='d-flex gap_12 align-items-center mb-lg-28 mb-md-18 mb-10'>
                 <img  src={CarImg} alt="CarImg"/>
                 <div className='blank'>
                   <h3 className='fw-bold text-14 lh-24 ff-acumin clr-blue mb-0'>Effective Cleaning</h3>
                   <p className='fw-normal text-16 lh-24 ff-acumin clr-blue opacity_70 max-w-451 mb-0'>The sublimation process effectively removes dirt, oil, and grime, even in hard-to-reach areas.</p>
                   </div>
                 </div>
                 <div className='d-flex gap_12 align-items-center mb-lg-28 mb-md-18 mb-10'>
                 <img  src={CarImg2} alt="CarImg"/>
                 <div className='blank'>
                   <h3 className='fw-bold text-14 lh-24 ff-acumin clr-blue mb-0'>Non-Abrasive</h3>
                   <p className='fw-normal text-16 lh-24 ff-acumin clr-blue opacity_70 max-w-451 mb-0'>Unlike sandblasting or chemical cleaning, dry ice blasting won’t damage your car’s components or paint.</p>
                   </div>
                 </div>
                 <div className='d-flex gap_12 align-items-center mb-lg-28 mb-md-18 mb-10'>
                 <img  src={Residue} alt="CarImg"/>
                 <div className='blank'>
                   <h3 className='fw-bold text-14 lh-24 ff-acumin clr-blue mb-0'>No Residue</h3>
                   <p className='fw-normal text-16 lh-24 ff-acumin clr-blue opacity_70 max-w-451 mb-0'>Since dry ice sublimates, there’s no residual waste to clean up, making it an environmentally friendly option.</p>
                   </div>
                 </div>
                 <div className='d-flex gap_12 align-items-center mb-lg-28 mb-md-18 mb-10'>
                 <img  src={SafeImg} alt="CarImg"/>
                 <div className='blank'>
                   <h3 className='fw-bold text-14 lh-24 ff-acumin clr-blue mb-0'>Safe for Various Materials</h3>
                   <p className='fw-normal text-16 lh-24 ff-acumin clr-blue opacity_70 max-w-451 mb-0'>It’s safe for use on metals, plastics, rubbers, fabrics and more, ensuring comprehensive cleaning without damage.</p>
                   </div>
                 </div>

            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img className='w-100 max_w_md_558 max-w-451' src={Chooseimg} alt="Chooseimg" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose