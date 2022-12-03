import React from 'react';

const ServiceCard = (props) => {
    const { serviceName, description, img, } = props.service
    return (
        <div  data-aos="flip-up" data-aos-duration="1000" 
        data-aos-easing="ease-in-out" className="card lg:w-96 md:w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-primary">read more</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;