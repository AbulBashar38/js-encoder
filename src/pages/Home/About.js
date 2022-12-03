import React from 'react';
import aboutImg from '../../assets/images/aboutImg.jpg'
const About = () => {
    return (
        <div id='about' className="hero lg:min-h-screen  bg-base-200 text-neutral">
            <div className="hero-content flex-col lg:flex-row">
                <img src={aboutImg} className="lg:max-w-md sm:max-w-sm rounded-lg shadow-2xl" alt='aboutImg' />
                <div className='lg:sp-10'>
                    <h1 className="lg:text-5xl text-4xl font-bold">About JS <span className='text-primary'>Encoder</span></h1>
                    <p className="py-6 lg:text-lg">JSEncoder provides online marketing campaigns across the key areas of Web Development, App Development, SEO etc. We started our official December in 2022  with a focus on small online business.  we try to evolved as a large online marketing firm. Now, we at JSEncoder, provides various internet marketing services for small and medium-sized business to enterprise brands across the globe with a great rate of success.</p>
                    <div className=' grid grid-cols-2 lg:gap-8 gap-2'>
                        <div data-aos="flip-left" 
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" 
                            className="card w-full bg-base-100 shadow-xl text-center">
                            <div className="lg:card-body p-5">
                                <h2 className="lg:card-title font-bold text-lg">We Are JS <span className='text-primary'>Encoder</span></h2>
                                <p className='lg:text-md '>We are the people who eat, drink, sleep and play with SE0 and development. We don't do work for money, we love this work and that's why we earn money. We love to work collaboratively with our clients to ensure that the objectives are met by our proven strategies.</p>
                            </div>
                        </div>
                        <div 
                        data-aos="flip-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" 
                        className="card w-full bg-base-100 shadow-xl text-center">
                            <div className="lg:card-body p-5">
                                <h2 className="lg:card-title font-bold text-lg">How We <span className='text-primary'>Formed</span></h2>
                                <p className='lg:text-md'>When we started we had nothing more than few computers, now have 18 members in our team. How we did it? We formed with very easy calculation, gradually with 1,2,3,4…..18 by satisfying over 300 clients for SEO, SMM and Development Projects for the last six years.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;