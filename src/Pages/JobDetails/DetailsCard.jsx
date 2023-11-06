import { VscSymbolColor } from 'react-icons/vsc';
import { SiWebpack } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';


const DetailsCard = ({job}) => {
    const{_id, title, category, deadline, maxPrice, minPrice, descrpition} =job
    return (
        <div className='flex justify-center mt-12'>
            <div className="card w-1/2 text-center text-light bg-gradient-to-r from-orange to-brown shadow-xl">
        <figure className='pt-4'>
            {
                category==='Graphics Design'? <VscSymbolColor className='text-5xl'></VscSymbolColor>
                : category==='Web Development' ? <SiWebpack className='text-5xl'></SiWebpack>
                : <BsGlobe className='text-5xl'></BsGlobe>
            }
        </figure>
        <div className="card-body">
          <h2 className="text-center text-4xl font-semibold">{title}</h2>
          <p className='text-sm'>{descrpition}</p>
          <p>Deadline: {deadline}</p>
          <p>Price Range: ${minPrice}- ${maxPrice}</p>
          
        </div>
      </div>
        </div>
    );
};

export default DetailsCard;