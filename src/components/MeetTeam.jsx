import React from 'react'
import MeetImg from '../assets/images/png/meet-img.png'

function MeetTeam() {
  return (
    <div className='position-relative'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                      <div className='Meet-pstn position_absolute d-flex align-items-center justify-content-center'>
                        <img className='w-100 max-w-lg-611 max-w-440' src={MeetImg} alt="MeetImg" />
                        </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center align-ite ms-center mt-lg-223">
                    <h1 className='fw-bold text-48 lh-57 ff-titling clr-blue mb-0 pb-10'>Meet The Team</h1>
                    <p className='fw-bold text-18 lh-21 ff-acumin clr-blue mb-0 pb-16'>Oxfordshire's Dry Ice Car Cleaning Specialists</p>
                    <p className='fw-normal text-16 lh-24 ff-acumin clr-blue opacity_70 max-w- 613'>We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetTeam