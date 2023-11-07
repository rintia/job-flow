import { VscSymbolColor } from 'react-icons/vsc';
import { SiWebpack } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const JobCard = ({job}) => {
    const{_id, title, category, deadline, maxPrice, minPrice, descrpition} =job
    return (
        <motion.div 
        whileHover={{ scale: [1, 1, 1.1, 1.1, 1],
          rotate: [0, 0, 15, 15, 0],
         }}

        className="card text-light bg-gradient-to-r from-orange to-brown shadow-xl">
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
          <div className="card-actions justify-center">
          <Link to={`/jobDetails/${_id}`}><button className="btn btn-outline ">Bid Now</button></Link>
          </div>
        </div>
      </motion.div>
    );
};

export default JobCard;