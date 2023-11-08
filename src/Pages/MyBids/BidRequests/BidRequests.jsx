import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import RequesRow from './RequesRow';


const BidRequests = () => {
  const[loading, setLoading] = useState(true)
    const {user} = useContext(AuthContext);
    const[bidReqs, setBidReqs] = useState([]);

    let newPageTitle = 'JobFlow | Bid Requests';
    document.querySelector('title').textContent = newPageTitle;
   

    const url = `https://job-flow-server.vercel.app/bids?ownerEmail=${user?.email}`

    useEffect(() => {
        fetch(url, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
          
          setBidReqs(data)
        setLoading(false)
        })
    },[url])

    console.log(bidReqs);

    const handleAccept = id => {
        fetch(`https://job-flow-server.vercel.app/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'accept' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bidReqs.filter(req => req._id !== id);
                    const updated = bidReqs.find(req => req._id === id);
                    updated.status = 'accept'
                    const newBidReqs = [updated, ...remaining];
                    setBidReqs(newBidReqs);
                }
            })
           
    }

    const handleReject = id => {
        fetch(`https://job-flow-server.vercel.app/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'reject' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bidReqs.filter(req => req._id !== id);
                    const updated = bidReqs.find(req => req._id === id);
                    updated.status = 'reject'
                    const newBidReqs = [updated, ...remaining];
                    setBidReqs(newBidReqs);
                }
            })

    }

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
    
   { loading === true ?
                         <div className="flex justify-center">
                            <img src="https://i.ibb.co/9NVN61Z/loading.gif"  alt="" />
                             </div>
                             :
        <tbody>
           {
        bidReqs.map(req => <RequesRow
        handleAccept={handleAccept}
        handleReject= {handleReject}
        key={req._id}
        req={req}
        ></RequesRow>)
      }
        </tbody>
     
    }
  
  </table>
</div>
  </div>
    );
};

export default BidRequests;