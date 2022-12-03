import React from 'react';
import serviceImg from '../../assets/images/serviceImg.jpg'
import webIcon from '../../assets/images/webIcon.png'
import databaseIcon from '../../assets/images/databaseIcon.png'
import marketingIcon from '../../assets/images/marketingIcon.png'
import serverIcon from '../../assets/images/serverIcon.png'
import UIUXIcon from '../../assets/images/UIUXicon.png'
import analysisIcon from '../../assets/images/analysisIcon.png'
import ServiceCard from './ServiceCard';
const Service = () => {
    const services = [
        {
            id: 1,
            serviceName: 'Web Development',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
            img: webIcon
        },
        {
            id: 2,
            serviceName: 'Database Analysis',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
            img: databaseIcon
        },

        {
            id: 6,
            serviceName: 'Server Security',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
            img: serverIcon
        },
        {
            id: 3,
            serviceName: 'UX/UI Strategy',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
            img: UIUXIcon
        },
        {
            id: 4,
            serviceName: 'Analysis For Tools',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
            img: analysisIcon
        },
        {
            id: 5,
            serviceName: 'Marketing Strategy',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
            img: marketingIcon
        }
    ]
    return (
        <div id='service' style={{ background: `url(${serviceImg})`, backgroundRepeat: 'repeat', backgroundSize: '100%' }} className='text-center mt-10 lg:pt-10'>
            <div >
                <div className='lg:w-3/5 m-auto '>
                    <h4 className='text-accent uppercase text-lg font-bold lg:mb-10 mb-5'>what we do</h4>
                    <h1 className='lg:text-5xl text-4xl font-bold capitalize'>We provide <span className='text-primary'>exclusive</span> services for your <span className='text-accent'> business</span></h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3  justify-between gap-8 mx-10 py-10'>
                    {
                        services.map(service => <ServiceCard  key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;