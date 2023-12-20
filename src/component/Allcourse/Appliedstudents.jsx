import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Appliedstudents = () => {
    let allcourse = useLoaderData()

    return (
        <div className='px-10 pt-20'>
            <div key={allcourse._id} className="card  bg-base-100 shadow-2xl  max-w-full " >
                <div className='max-w-full   bg-[#3f37c9] text-white p-4    '>
                    <p>COURSE</p>
                    <h1 className='text-6xl pb-9 '  >{allcourse.name}</h1>

                </div>
                <div className="card-body w-full  bg-white text-[#3f37c9] ">
                    <div>
                        <h2 className="card-title">{allcourse.name}</h2>
                        <p>{allcourse.description}</p>
                        <p className='pt-1 pb-2'> <span className='font-semibold'>Instructor:</span> {allcourse.instructor}</p>
                        <div className="badge badge-accent "> <span className='pr-2  '>Enrolled Student</span>  {allcourse?.enrolledStudent?.length}</div>
                            
                    </div>
                    <div>
                        <h1 className='font-bold text-xl text-start'>All enrolled student</h1>
                    </div>
                    <div className="card-actions justify-start ">
<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>


                       {allcourse.enrolledStudent.length === 0 ? <div>No student enrolled</div> :
                      (  allcourse.enrolledStudent.map(s=>(
                            <div role="alert " className="alert max-w-xl shadow-lg" key={s?.id}>
                        <div className="avatar placeholder">
  <div className="bg-neutral  rounded-full w-8">
    <span className="text-white">{s.email?.slice(0,1)}</span>
  </div>
</div> 
                            <div>
                              <h3 className="font-bold">{s.email}</h3>
                            </div>
                          </div>
                        )))
                       }
                     </div>
                      
                        </div>
                    </div>
                </div>
        </div>
    );
};

            export default Appliedstudents;