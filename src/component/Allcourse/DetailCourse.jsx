import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import getsingleUser from '../../Hook/getsingleUser';
import toast, { Toaster } from 'react-hot-toast';
import Allcourse from './Allcourse';

const DetailCourse = () => {
    let [Userinfo]=getsingleUser()

    let allcourse = useLoaderData()

        const {
            register,
            handleSubmit,
            watch,
            reset,
            formState: { errors },
          } = useForm()
        
          const applyToCourse = async (courseId) => {
            let updatedCourse = { id: Userinfo._id, email: Userinfo.email };
          
            try {
              const response = await fetch(`http://localhost:3000/course/${courseId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCourse),
              });
          
              const data = await response.json();
          
              console.log(data);
          
              if (data.message === 'You already enrolled in the course') {
                toast.error('Already applied');
              } else if (data.modifiedCount > 0) {
                toast.success('Applied');
              } else {
                toast.error('Unknown response');
              }
            } catch (error) {
              console.error('Error:', error);
            }
          };
          
          const addToCart = async (course) => {
            let cart={name:course.name  , description:course.description , instructor:course.instructor, email:Userinfo.email, userId:Userinfo._id}
          
            try {
              const response = await fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(cart),
              });
          
              const data = await response.json();
          
              console.log(data);
          
              if (data.message === 'course is already in the cart') {
                toast.error('Already in the cart');
              } else if (data.insertedId) {
              
              } else {
                toast.error('Unknown response');
              }
            } catch (error) {
              console.error('Error:', error);
            }
          };
          
          const onSubmit = async (data) => {
            await applyToCourse(allcourse._id);
          
            await addToCart(allcourse);
          };
      
   

    return (
        <div>
                <form key={allcourse._id} className="card  bg-base-100 shadow-2xl  max-w-full " onSubmit={handleSubmit(onSubmit)}>
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

                        <div className="card-actions justify-end ">

                       
                         <button className="btn btn-ghost">Apply now</button>
                        <Toaster></Toaster>
                        </div>
                    </div>
                </form>
             
        </div>
    );
};

export default DetailCourse;