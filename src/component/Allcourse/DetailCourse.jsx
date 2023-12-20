import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import getsingleUser from '../../Hook/getsingleUser';
import toast, { Toaster } from 'react-hot-toast';
import Allcourse from './Allcourse';

const DetailCourse = () => {
  let [Userinfo] = getsingleUser()

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
      const response = await fetch(`https://eduhub-ndns.onrender.com/course/${courseId}`, {
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
    let cart = { courseId: course._id, name: course.name, description: course.description, instructor: course.instructor, email: Userinfo.email, userId: Userinfo._id }

    try {
      const response = await fetch('https://eduhub-ndns.onrender.com/cart', {
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
    <div className='px-10 py-10'>
      <form key={allcourse._id} className="card  bg-base-100 shadow-2xl  max-w-full " onSubmit={handleSubmit(onSubmit)}>
        <div className='max-w-full   bg-[#3f37c9] text-white p-4 rounded-l-xl relative '>
          <p>COURSE</p>
          <h1 className='text-5xl py-5 '  >{allcourse.name}</h1>

        </div>
        <div className="card-body w-full  bg-white text-[#3f37c9] rounded-r-xl">
          <div>
            <h2 className="card-title">{allcourse.name}</h2>
            <p className='pt-3'>{allcourse.description}</p>
            <p className='pt-1'> <span className='font-semibold'>Instructor:</span> {allcourse.instructor}</p>

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