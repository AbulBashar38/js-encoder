import React from 'react';
import modalBg from '../../assets/images/writing.jpg'
const Navbar = () => {
    return (
        <section className='bg-accent lg:px-16 sticky top-0 z-10'>
            <div className="navbar relative">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-accent">
                            <li><a href='#about'>About</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 border border-gray-300 bg-white">
                                    <li className='hover:bg-accent  hover:text-white'><a href='#service'>Web Development</a></li>
                                    <li className='hover:bg-accent'><a href='#service'>App Development</a></li>
                                    <li className='hover:bg-accent '><a href='#service'>Web Hosting</a></li>
                                    <li className='hover:bg-accent'><a href='#service'>SEO</a></li>
                                </ul>
                            </li>
                            <li><a>Blog</a></li>
                            <li><a href='#career'>Career</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <a href='#home' className="btn btn-ghost normal-case text-xl"><span className='text-secondary'>JS</span> <span className='text-white'>ENCODER</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white lg:font-bold">
                        <li><a href='#about'>About</a></li>
                        <li tabIndex={0}>
                            <a>
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="py-2 mt-2 border border-gray-300 bg-white">
                                <li className='hover:bg-accent text-black hover:text-white'><a href='#service'>Web Development</a></li>
                                <li className='hover:bg-accent text-black hover:text-white'><a href='#service'>App Development</a></li>
                                <li className='hover:bg-accent text-black hover:text-white'><a href='#service'>Web Hosting</a></li>
                                <li className='hover:bg-accent text-black hover:text-white'><a href='#service'>SEO</a></li>
                            </ul>
                        </li>
                        <li><a>Blog</a></li>
                        <li><a href='#career'>Career</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="my-modal-6" className="btn text-white bg-primary opacity-75 border-0 hover:bg-primary hover:opacity-100"><span className='text-secondary mr-2'>Get</span> A Proposal</label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <label htmlFor="my-modal-6" className="modal  modal-bottom sm:modal-middle cursor-pointer">
                        <label className="modal-box " htmlFor="">
                            <div className='grid grid-cols-2 gap-2'>
                                <div>
                                    <h3 className='text-2xl font-bold mb-5'>Get Started <span className='text-primary'>Today!</span></h3>
                                    <p className='text-sm'>We work 24/7 round the clock to satisfy our clients and help them to satisfy their clients. If you want to know how can we help your business just fill the form and click on Start Now button! One of our team members will call you shortly.</p>
                                    <div className='text-lg font-bold text-center mt-5' >
                                        <a href="mailto:someone@yoursite.com">omeone@yoursite.com</a>
                                        <br />
                                        <a className='text-primary' href="tel:01908899996">01908899996</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="card w-full bg-base-100 shadow-xl image-full">
                                        <figure><img src={modalBg} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs my-2" />
                                            <input type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs my-2" />
                                            <input type="text" placeholder="Website" className="input input-bordered input-primary w-full max-w-xs my-2" />
                                            <label htmlFor="my-modal-6" class="btn btn-primary my-2">start now</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </label>
                    </label>

                </div>

            </div>
        </section >
    );
};

export default Navbar;