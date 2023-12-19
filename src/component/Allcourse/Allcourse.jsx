import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Allcourse = () => {

  
    let {data:courses=[],refetch}=useQuery( 
        ['course'],
       async()=>{
            let res= await axios.get('http://localhost:3000/course')
            return res.data
           
                })

              


    return (
        <div className='hero-content  mx-auto  flex-col '>
            <div className='px-10 pt-10'>
                <h1 className=' font-medium uppercase'>Find your course</h1>
            </div>
            <div className='grid grid-cols-1 my-5 gap-4  '>

                {
                    courses.map(c=>(

                         <div key={c._id} className="card md:card-side bg-base-100 shadow-2xl  max-w-full ">
                    <div className='max-w-full  md:w-2/6 bg-[#3f37c9] text-white p-4 rounded-l-xl relative '>
                        <p>COURSE</p>
                        <h1 className='text-3xl py-5 '>{c.name}</h1>
                        <p className='flex items-center gap-1 lg:absolute bottom-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Enroll now   </p>
                    </div>
                    <div className="card-body w-full md:w-4/6 bg-white text-[#3f37c9] rounded-r-xl">
                        <div>
                            <h2 className="card-title">{c.name}</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="badge badge-accent">25</div>
                            <div className="">
                                <Link to={`/applied/${c._id}`} > See all {c.enrolledStudent.length}</Link>
                            </div>
                        </div>

                        <div className="card-actions justify-end ">

                         <Link to={`/detail/${c._id}`}>
                         <button className="btn btn-ghost" >Apply now</button>
                         </Link>   
                        </div>
                    </div>
                </div>
             
                    ))
                }
              
              
            </div>

        </div>
    );
};

export default Allcourse;