import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ContextAuth } from '../../AuthContext/Authcontext';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Addcourse = () => {
    let { user, Createuser, updateUser } = useContext(ContextAuth)

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        let enrolledStudent = []
        let courseinfo = {
            name: data.cname,
            description: data.description,
            instructor: user?.email,
            enrolledStudent: enrolledStudent,

        }
        fetch('https://eduhub-server.vercel.app/course',
            {
                method: "POST"
                , headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(courseinfo)
            }
        ).then(res => res.json()).then(course => {
            console.log(course);
            if (course.insertedId) {
                toast.success('add success')
            }
        })
        reset()
    }

    return (
        <div>
            <div className="hero-content   flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full  max-w-xl shadow-2xl shadow-gray-700 bg-base-100">
                    <div className="text-center pt-10 pb-6">
                        <h1 className="text-5xl font-bold"> Create A Course</h1>

                    </div>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" {...register("cname")} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>

                            <textarea className="textarea textarea-bordered " placeholder="Description" {...register("description")} ></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add </button>
                        </div>
                    </form>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Addcourse;