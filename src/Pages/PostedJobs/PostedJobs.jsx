import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyJobCard from './MyJobCard';

const PostedJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const url = `http://localhost:5000/jobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url]);
    console.log(jobs);
    return (
        <div className='mt-24'>
            <h1 className='text-dark text-5xl text-center'>Jobs You Posted</h1>
             <div className='mt-12 grid grid-cols-1 md:grid-cols-3  gap-6'>
            {
                jobs.map(job => <MyJobCard
                key={job._id}
                job={job}
                ></MyJobCard>)
            }
        </div>
        </div>
       
    );
};

export default PostedJobs;