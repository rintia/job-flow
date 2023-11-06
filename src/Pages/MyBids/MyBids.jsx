import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyBidsRow from './MyBidsRow';

const MyBids = () => {
    const {user} = useContext(AuthContext);
    const[bids, setBids] = useState([]);

    const url = `http://localhost:5000/bids?userEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBids(data))
    },[url])

    console.log(bids);
    return (
  <div className='mt-12'> 
    <h1 className='text-3xl font-semibold text-dark text-center'>My Bids</h1>
          <div className="overflow-x-auto mt-8">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bids.map(bid => <MyBidsRow
        key={bid._id}
        bid={bid}
        ></MyBidsRow>)
      }
    </tbody>
  </table>
</div>
  </div>
    );
};

export default MyBids;