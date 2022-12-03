import React from 'react';
import PortfolioCard from './PortfolioCard';
import portfolio1 from '../../assets/images/portfolio1.png'
import portfolio2 from '../../assets/images/portfolio2.png'
import portfolio3 from '../../assets/images/portfolio3.png'
const Portfolio = () => {
    return (
        <div className='text-white bg-accent mt-20'>
            <div className='container mx-auto p-10'>
                <h1 className='lg:text-5xl text-4xl font-bold my-5'><span className='text-secondary'>Our</span> Portfolio</h1>
                <p className='text-lg'>We work for customer satisfaction and happiness! We have done it over and over again. Look through our many web design and development projects and feel the vibe in you. Our hard work and expertise drove us into the best web design company in Bangladesh and worldwide. We just don't just want to tell, we want to show you too.</p>
                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-between py-10 gap-5'>
                    <PortfolioCard img={portfolio1}></PortfolioCard>
                    <PortfolioCard img={portfolio2}></PortfolioCard>
                    <PortfolioCard img={portfolio3}></PortfolioCard>
                </div>
                <div className='text-center'>
                    <button className="btn btn-secondary font-bold btn-md sm:btn-sm md:btn-md lg:btn-lg">View Portfolio</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;