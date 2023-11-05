import React from 'react';
import { VscSymbolColor } from 'react-icons/vsc';
import { SiWebpack } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { AiTwotoneDelete } from 'react-icons/ai';

const MyJobCard = ({job}) => {
    const{_id, title, category, deadline, maxPrice, minPrice, descrpition} =job
    return (
        <div className="card text-light bg-gradient-to-r from-orange to-brown shadow-xl">
        <figure className='pt-4'>
            {
                category==='Graphics Design'? <VscSymbolColor className='text-5xl'></VscSymbolColor>
                : category==='Web Development' ? <SiWebpack className='text-5xl'></SiWebpack>
                : <BsGlobe className='text-5xl'></BsGlobe>
            }
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-sm'>{descrpition}</p>
          <p>Deadline: {deadline}</p>
          <p>Price Range: ${minPrice}- ${maxPrice}</p>
          <div className="card-actions justify-between">
          <button className="btn btn-outline ">Update</button>
          <button className='btn btn-outline'>Delete</button>
           
           
          </div>
        </div>
      </div>
    );
};

export default MyJobCard;