import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
      const navLinks = <>
       <li > <NavLink style={({ isActive }) => ({
              color: isActive ? "#4F4A45" : 'black',
              textDecoration: isActive ? 'underline' : 'none',
              fontWeight : isActive ? 'bold' : 'normal',
              background: isActive ? 'transparent' : 'transparent'
              })}
               to='/' >Home</NavLink> </li>
      <li><NavLink style={({ isActive }) => ({
              color: isActive ? "#4F4A45" : 'black',
              textDecoration: isActive ? 'underline' : 'none',
              fontWeight : isActive ? 'bold' : 'normal',
              background: isActive ? 'transparent' : 'transparent'
              })} to='/addJob'>Add Job</NavLink></li>
      <li><NavLink style={({ isActive }) => ({
              color: isActive ? "#4F4A45" : 'black',
              textDecoration: isActive ? 'underline' : 'none',
              fontWeight : isActive ? 'bold' : 'normal',
              background: isActive ? 'transparent' : 'transparent'
              })} to='/postedJobs'>My Posted Jobs</NavLink></li>
      <li><NavLink style={({ isActive }) => ({
              color: isActive ? "#4F4A45" : 'black',
              textDecoration: isActive ? 'underline' : 'none',
              fontWeight : isActive ? 'bold' : 'normal',
              background: isActive ? 'transparent' : 'transparent'
              })} to='/myBids'>My Bids</NavLink></li>
      <li><NavLink style={({ isActive }) => ({
              color: isActive ? "#4F4A45" : 'black',
              textDecoration: isActive ? 'underline' : 'none',
              fontWeight : isActive ? 'bold' : 'normal',
              background: isActive ? 'transparent' : 'transparent'
              })} to='/bidRequests'>Bid Requests</NavLink></li>
      </>
      const handleLogOut =() => {
        logOut()
        .then(() => console.log('sign out successfully'))
        .catch(error => console.log(error))
     }
      return (
          <div className="navbar sticky top-0 z-50 bg-light">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navLinks}
        </ul>
      </div>
      
       
      <Link to='/'><button className="btn w-48 md:w-auto btn-ghost font-bold normal-case text-[#ED7D31] text-2xl md:text-4xl"> <img className="w-12" src="https://i.ibb.co/0j423z8/laptop.png" alt="" />
        Job Flow</button></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navLinks}
      </ul>
    </div>
    <div className="navbar-end flex gap-0 md:gap-4">
  
       
      { user?.email ? <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                  <div className="w-10 rounded-full">
                                      <img src={user.photoURL} alt={user.displayName} />
                                  </div>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                  <li>
                                      <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
  
                                  </li>
                                  <li>
                                      <button className="btn btn-sm  btn-ghost"
                                          onClick={handleLogOut}
                                      >Logout</button>
  
                                  </li>
                              </ul>
                          </div>
     
      :
       <div className="md:flex ">
        <NavLink style={({ isActive }) => ({
              textDecoration : isActive ? 'underline' : 'none'
              })} to='/login'><h1 className="text-[#ED7D31] font-semibold mr-4" href="">Login/Register</h1></NavLink>
        
       </div>
      }
     
      
    </div>
  </div>
      );
  };
    

export default Navbar;