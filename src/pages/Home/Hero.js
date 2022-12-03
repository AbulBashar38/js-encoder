import React from 'react';
import heroImg from '../../assets/images/heroImg.svg'
const Hero = () => {
    return (
        <section id='home' className=' bg-white overflow-hidden'>
            <div className="hero lg:min-h-screen md:min-h-full container mx-auto  text-info">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-back"

                        src={heroImg} className="lg:max-w-md sm:max-w-sm rounded-lg shadow-2xl" alt='hero svg' />
                    <div data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out-back"
                     className='lg:pr-10 lg:text-left lg:mt-0 mt-5 text-center'>
                        <h1 className="lg:text-5xl text-4xl  font-bold">Get The Best Website and App for Your Company</h1>
                        <p className="lg:py-6 py-4 text-lg lg:text-2xl">Design your website with the best web developers in Bangladesh. Our Developers have almost 10 years experiences in this field.</p>
                        <button className="btn btn-primary text-white">Explore <span className='text-secondary ml-2'>more</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;