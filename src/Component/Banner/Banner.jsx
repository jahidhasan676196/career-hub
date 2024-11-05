import React from 'react';
import profile from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div>
            <section className=''>
            <div className="hero bg-white ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={profile}
                    className="w-1/2 rounded-lg text-end" />
                 <div>
                <h1 className="text-7xl font-extrabold text-[#1A1919]">One Step Closer To Your Dream Job</h1>
                 <p className="py-6">
                 Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                      </p>
                        <button className="btn btn-primary">Get Started</button>
                         </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;