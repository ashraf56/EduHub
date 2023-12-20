import React from 'react';
import getMyclass from '../../Hook/getMyclass';
import { Link } from 'react-router-dom';

const Myclasses = () => {
    const [myclass] = getMyclass()
    return (
        <div className='px-10  mx-auto  '>
            <div className='pt-20 pb-3'>
                <h1 className='uppercase font-semibold pl-5'>Your applied Course</h1>
            </div>
            <div className='grid grid-cols-1 my-5 gap-4 '>


                {myclass.length !== 0 ?
                    (myclass.map(m => (
                        <div className='' key={m._id}>
                            <div key={m._id} className="card  md:card-side bg-base-100 shadow-2xl  max-w-full backdrop-blur-xl ">
                                <div className='max-w-full  md:w-2/6 bg-[#3f37c9] text-white p-4 rounded-l-xl relative x '>
                                    <p>COURSE</p>
                                    <h1 className=' text-2xl md:text-5xl py-5   font-bold'>{m.name}</h1>

                                </div>
                                <div className="card-body w-full md:w-4/6 bg-white text-[#3f37c9] rounded-r-xl">
                                    <div>
                                        <h2 className="card-title">{m.name}</h2>
                                        <p className='pb-2'> <details open>
                                            <summary>description</summary>  {m.description}
                                        </details>
                                        </p>
                                        <div className="badge badge-accent "> <span >Enrolled </span>  </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    ))) : <div className='text-center font-bold'> No course available</div>
                } </div>
        </div>
    );
};

export default Myclasses;