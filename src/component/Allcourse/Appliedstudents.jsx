import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Appliedstudents = () => {
    let allcourse = useLoaderData()
   
    return (
        <div>
              <div key={allcourse._id} className="card  bg-base-100 shadow-2xl  max-w-full " >
                    <div className='max-w-full   bg-[#3f37c9] text-white p-4 rounded-l-xl relative '>
                        <p>COURSE</p>
                        <h1 className='text-3xl py-5 '  >{allcourse.name}</h1>
                        <p className='flex items-center gap-1 lg:absolute bottom-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Enroll now   </p>
                    </div>
                    <div className="card-body w-full  bg-white text-[#3f37c9] rounded-r-xl">
                        <div>
                            <h2 className="card-title">{allcourse.name}</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="badge badge-accent">25</div>
                        </div>

                        <div className="card-actions justify-center ">

                       {
                        allcourse.enrolledStudent.map(s=>(
                            <div role="alert" className="alert shadow-lg" key={s?.id}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                              <h3 className="font-bold">{s.email}</h3>
                              <div className="text-xs">You have 1 unread message</div>
                            </div>
                          </div>
                        ))
                       }
                     
                      
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Appliedstudents;