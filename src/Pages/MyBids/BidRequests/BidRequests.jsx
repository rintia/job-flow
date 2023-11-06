import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import RequesRow from './RequesRow';


const BidRequests = () => {
    const {user} = useContext(AuthContext);
    const[bidReqs, setBidReqs] = useState([]);

    const url = `http://localhost:5000/bids?ownerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBidReqs(data))
    },[url])

    console.log(bidReqs);

    return (
        <div className='mt-12'> 
    <h1 className='text-3xl font-semibold text-dark text-center'>Requested Bids</h1>
          <div className="overflow-x-auto mt-8">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bidReqs.map(req => <RequesRow
        key={req._id}
        req={req}
        ></RequesRow>)
      }
    </tbody>
  </table>
</div>
  </div>
    );
};

export default BidRequests;