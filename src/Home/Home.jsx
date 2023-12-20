import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ContextAuth } from '../AuthContext/Authcontext';
import getsingleUser from '../Hook/getsingleUser';
import imgs from '../assets/user_1077012.png'
import Header from '../component/Header/Header';
const Home = () => {
  let { user , logout} = useContext(ContextAuth)
  let [Userinfo] = getsingleUser()
const handlelogOut=()=>{
  logout()
  .then(() => {

  }).catch((error) => {
    console.log(error);
  });
}

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">
          {/* Page content here */}
          <Header></Header>
          <Outlet></Outlet>

        </div>

        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

          <ul className="menu p-4 w-44 md:w-60 min-h-full bg-[#000] text-white">

            <div className='justify-center text-center pt-4 pb-5'>
           { user ?  <div className="avatar placeholder ">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                  <span className="text-3xl">{user?.displayName?.slice(0, 1)}</span>
                </div>
              </div>:
               <div className="avatar  ">
               <div className="bg-neutral text-neutral-content rounded-full w-24">
                 <img src={imgs} className='w-8'/>
               </div>
             </div>
              
              }
              <div>
              { user  ?<>
             <h1 className='text-xl pb-2 pt-2'>{user?.displayName }</h1>
                <h1>{Userinfo?.role }</h1> </>  :
                <div className='pt-2'>
                  <p>Log in  now</p>
                </div>
                }
              </div>

            </div>

            <li>
              <Link to={'/'}>Home</Link>
            </li>
           { Userinfo.role === 'student' && <li>
              <Link to={'/myclass'}>myclass</Link>
            </li> }
            { Userinfo.role === 'admin' && <li>
            <Link to={'/add'}>Add</Link>
            </li>}
         { user?  <li>
              <a onClick={handlelogOut}>Log out</a>
            </li>:
            <li>
              <Link to={'/login'}>Log In</Link> 
            </li>}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Home;