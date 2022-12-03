import React from 'react';

const MemberCard = (props) => {
    const { name, img } = props.info
    return (
        <div data-aos="fade-up" data-aos-duration='1500' data-aos-easing='ease-in-out-back' className="card card-compact w-full md:w-60 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Web Developer</p>
            </div>
        </div>
    );
};

export default MemberCard;