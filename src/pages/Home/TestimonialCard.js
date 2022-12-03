import React from 'react';

const TestimonialCard = ({ img }) => {
    return (
        <div data-aos="zoom-out" data-aos-delay="1000" data-aos-duration='1500' data-aos-easing='ease-in-out-back' className="card w-full bg-base-100 shadow-xl">
            <div className="card-body text-center">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt iste vitae amet quis quasi excepturi, est temporibus fuga maxime?</p>
                <div className='grid grid-cols-3 mt-5'>
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className='col-span-2 ml-4'>
                        <h2 className="card-title">Devid Cornawell</h2>
                        <p>Web <span className='text-primary'>Developer</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;