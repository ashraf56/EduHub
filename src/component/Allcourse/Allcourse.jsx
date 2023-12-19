import React from 'react';

const Allcourse = () => {
    return (
        <div>
            <div className='px-10 pt-10'>
                <h1 className=' font-medium uppercase'>Find your course</h1>
            </div>
            <div className='grid grid-cols-1 my-5 gap-4 overflow-y-scroll '>
                <div className="card md:card-side bg-base-100 shadow-2xl h-[190px] mx-auto lg:max-w-3xl ">
                    <div className='w-full md:w-2/6 bg-[#3f37c9] text-white p-4 rounded-l-xl'>
                        <p>COURSE</p>
                        <h1 className='text-4xl'>Javascript Fundamentals</h1>
                        <p className='flex items-center gap-1 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Enroll now   </p>
                    </div>
                    <div className="card-body w-full md:w-4/6 bg-white text-[#3f37c9] rounded-r-xl">
                        <div>
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="badge badge-accent">25</div>
                        </div>

                        <div className="card-actions justify-end ">

                            <button className="btn btn-ghost">Apply now</button>
                        </div>
                    </div>
                </div>
                <div className="card md:card-side bg-base-100 shadow-2xl h-full mx-auto lg:max-w-3xl ">
                    <div className='w-full md:w-2/6 bg-[#3f37c9] text-white p-4 rounded-l-xl'>
                        <p>COURSE</p>
                        <h1 className='text-4xl'>Javascript Fundamentals</h1>
                        <p className='flex items-center gap-1 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Enroll now   </p>
                    </div>
                    <div className="card-body w-full md:w-4/6 bg-white text-[#3f37c9] rounded-r-xl">
                        <div>
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="badge badge-accent">25</div>
                        </div>

                        <div className="card-actions justify-end ">

                            <button className="btn btn-ghost">Apply now</button>
                        </div>
                    </div>
                </div>
              
            </div>

        </div>
    );
};

export default Allcourse;