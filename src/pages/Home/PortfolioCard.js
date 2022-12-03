import React from 'react';

const PortfolioCard = ({ img }) => {
    return (
        <div data-aos="flip-right" data-aos-duration='1500' data-aos-easing='ease-in-out-back' className="card w-full bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <a >{<img src={img} alt="Shoes" className="rounded-xl" />}</a>
            </figure>
        </div>
    );
};

export default PortfolioCard;