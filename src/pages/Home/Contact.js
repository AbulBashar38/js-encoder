import React from "react";
import contactImg from "../../assets/images/contactImg.jpg";
const Contact = () => {
  return (
    <div id="contact" className=" bg-amber-50">
      <h1 className="lg:text-5xl text-3xl font-bold pt-10 lg:px-20 px-10">
        Get In <span className="text-primary">Touch</span>
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-20 py-10">
        <div
          data-aos="flip-right"
          data-aos-delay="1000"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="mx-auto"
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="my-2">
                <label className="label">
                  <span className="label-text font-bold text-primary text-lg">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give Your Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div className="my-2">
                <label className="label">
                  <span className="label-text font-bold text-primary text-lg">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email here"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <div className="my-2">
                <label className="label">
                  <span className="label-text font-bold text-primary text-lg">
                    Phone
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="Give Your Phone Number"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div className="my-2">
                <label className="label">
                  <span className="label-text font-bold text-primary text-lg">
                    Company Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give Your Company Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold text-primary text-lg">
                  Message
                </span>
              </label>
              <textarea
                className="textarea textarea-primary h-full w-full"
                placeholder="Write here"
              ></textarea>
            </div>
          </div>
          <button className="btn btn-primary mt-10">send message</button>
        </div>

        <div
          data-aos="flip-left"
          data-aos-delay="1000"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out-back"
          className="flex justify-end align-middle"
        >
          <img
            className="w-3/4 hidden lg:block rounded-lg"
            src={contactImg}
            alt=""
          />
        </div>
      </div>
      <div className=" pt-10 lg:px-20 px-10">
        <h1 className="lg:text-3xl text-2xl font-bold">
          Our <span className="text-primary">Location</span>
        </h1>
        <p className="text-lg">
          225/1, WEST MONIPUR, <br /> MIRPUR, DHAKA-1216
        </p>
      </div>
    </div>
  );
};

export default Contact;
