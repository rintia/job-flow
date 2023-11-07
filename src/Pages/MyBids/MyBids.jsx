import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Providers/AuthProvider';
import MyBidsRow from './MyBidsRow';

const MyBids = ({}) => {

  let newPageTitle = 'JobFlow | My Bids';
    document.querySelector('title').textContent = newPageTitle;
  
    const {user} = useContext(AuthContext);

    
    const[bids, setBids] = useState([]);


    const url = `http://localhost:5000/bids?userEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBids(data))
    },[url])

    const handleSort =() => {
        fetch('http://localhost:5000/bids')
        .then(res => res.json())
        .then(data => {
          const sorted = data.filter(data => data.userEmail === user.email)
          setBids(sorted)
        })

    }

    

    const handleComplete = id => {
      fetch(`http://localhost:5000/bids/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'complete' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
                const remaining = bids.filter(bid => bid._id !== id);
                const updated = bids.find(bid => bid._id === id);
                updated.status = 'complete';
                const newBids = [updated, ...remaining];
                setBids(newBids);
            }
        })
        
    }

    console.log(bids);

    return (
  <div className='mt-12'> 
    <h1 className='text-3xl font-semibold text-dark text-center'>My Bids</h1>
    <div className='flex justify-end mt-4'>
    <button onClick={handleSort} className='btn btn-outline btn-accent'>Sort By Status</button>
    </div>
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
        handleComplete={handleComplete}
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