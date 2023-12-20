import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../AuthContext/Authcontext';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  let {user,Createuser,updateUser}= useContext(ContextAuth)
  

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  let navigate = useNavigate()
  const onSubmit = (data) =>{
console.log(data);
Createuser(data.email, data.password)
.then((userCredential) => {
    const user = userCredential.user;
    updateUser(data.name)
    .then(() => {
      let usersinfo={name:data.name, email:data.email, password:data.password , role:'student'}
fetch('http://localhost:3000/alluser' ,
{
  method:"POST"
  ,headers:{
    'content-type': 'application/json'
  },
  body:JSON.stringify(usersinfo)
}
).then(res => res.json()).then( Alluser=> {
console.log(Alluser);
if (Alluser.insertedId) {
   toast.success('Registration success')
   navigate('/')
}
})

  
   }).catch((error) => {
    console.log(error);
   });
  })
  .catch((error) => {
    const errorMessage = error.message;
   console.log(errorMessage);
   toast.error(errorMessage)
  });
reset()
  }
    return (
        <div>
            <div className=" ">
  <div className="hero-content  min-h-screen flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-xl shadow-2xl shadow-gray-700 bg-base-100">
    <div className="text-center pt-10 pb-6">
      <h1 className="text-5xl font-bold">Create your profile!</h1>
      
    </div>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" {...register("name")} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email")} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />
          <label className="label">
            <span  className="label-text-alt link link-hover"><Link to={'/login'}> Already have account? Log in now</Link></span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary ">Sign up</button>
        </div>
      </form>
      <Toaster></Toaster>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;