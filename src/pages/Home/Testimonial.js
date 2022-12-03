import React from 'react';
import TestimonialCard from './TestimonialCard';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
const Testimonial = () => {
    return (
        <div className='container mx-auto lg:my-20 my-10 text-neutral px-5'>
            <h4 className='text-primary text-lg font-bold mb-5'>TESTIMONIALS</h4>
            <h1 className='lg:text-5xl text-4xl font-bold'>What Our <span className='text-primary'>Clients</span> Say About us</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 justify-between lg:mt-20 mt-5'>
                <TestimonialCard img={people1}></TestimonialCard>
                <TestimonialCard img={people2}></TestimonialCard>
                <TestimonialCard img={people3}></TestimonialCard>
            </div>
        </div>
    );
};

export default Testimonial;