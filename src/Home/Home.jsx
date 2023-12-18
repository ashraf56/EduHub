import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 

  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
  
    <ul className="menu p-4 w-36 md:w-60 min-h-full bg-black text-base-content">
    
    <div className='justify-center text-center pt-4 pb-5'>
    <div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content rounded-full w-24">
    <span className="text-3xl">D</span>
  </div>
</div> 
   <div>
    <h1 className='text-xl'>User name</h1>
    <h1>role</h1>
   </div>

    </div>
      
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/login'}>Log In</Link>
      </li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Home;