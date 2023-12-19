import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../AuthContext/Authcontext';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const Login = () => {
  let { user, Login } = useContext(ContextAuth)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  let navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    Login(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Log in success")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);

      });
    navigate('/')
    reset()
  }
  return (
    <div className='container'>
      <div className="  bg-base-200">
        <div className="hero-content min-h-screen flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required {...register("email")} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />
                <label className="label">
                  <span className="label-text-alt link link-hover">
                    <Link to={'/signup'}>Create account</Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
            </form>
            <Toaster></Toaster>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;