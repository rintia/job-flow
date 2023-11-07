import React from 'react';
import{PiNotePencilBold} from 'react-icons/pi'
import{AiOutlinePushpin, AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div className="mt-32 ">
        <div className="hero-content w-full flex-col lg:flex-row gap-8 justify-start">
          <div className='lg:w-1/2'>
          <img src="https://i.ibb.co/XsBzr69/easy2.webp" className=" rounded-lg shadow-2xl" />
          </div>
          <div>
            <h1 className="text-5xl text-orange font-bold">Get Started, It's Easy</h1>
            <div className="py-6  flex gap-2 items-center font-semibold text-3xl text-dark">
            <PiNotePencilBold></PiNotePencilBold>
             <p> No cost to join</p>  </div>
            <div className="py-6 flex gap-2 items-center font-semibold text-3xl text-dark">
                <AiOutlinePushpin></AiOutlinePushpin>
                <p>Post a job you and hire talent</p></div>
            <div className="py-6 flex gap-2 items-center font-semibold text-3xl text-dark">
            <AiOutlineStar></AiOutlineStar>
               <p>Work with the best</p></div>
            <Link to='/login'><button className="btn btn-primary bg-orange border-none text-light hover:bg-dark">Join For Free</button></Link>
          </div>
        </div>
      </div>
    );
};

export default GetStarted;