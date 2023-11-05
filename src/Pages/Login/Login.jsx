
import { Link, useLocation, useNavigate} from "react-router-dom";
import { useContext } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    console.log('location in the login page', location)
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(() => {
        navigate('/'),
        toast.success('Sign in Successful')
      })
      .catch(error => console.error(error))
    }
    
      const handleLogin = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password)
          signInUser(email, password)
          .then(result=> {
            navigate(location?.state ? location.state : '/')
            toast.success('Successfully logged in')
            console.log(result.user)
            e.target.reset();
            
          })
          .catch(error =>{
            console.log(error)
            toast.warning('Invalid Email or Password')
        })

      }
    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/pn2yhk5/bg.jpg)'}} className="hero min-h-screen ">
          <div className="hero-overlay"></div>
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-white font-bold text-dark">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn border-none bg-dark  hover:bg-[#D988B9] btn-primary">Login</button>
          <p className="text-center mt-4">Or</p>
          <p className="text-center">Sign in with <button onClick={handleGoogleSignIn} className="btn text-dark btn-link">Google</button></p>
        </div>
        <p>New here? Please <Link to='/register'><button className="btn btn-link text-dark">Register</button></Link></p>
      </form>
    </div>
  
  </div>

</div>
    );
};

export default Login;