import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyJobCard from './MyJobCard';
import Swal from 'sweetalert2';

const PostedJobs = () => {
    let newPageTitle = 'JobFlow | My Posted Jobs';
    document.querySelector('title').textContent = newPageTitle;
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const url = `http://localhost:5000/jobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url]);
    console.log(jobs);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = jobs.filter(job => job._id !== id);
                            setJobs(remaining);
                        }
                    })

            }
        })
    }


    return (
        <div className='mt-24 px-4 lg:px-0'>
            <h1 className='text-dark text-5xl text-center'>Jobs You Posted</h1>
             <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
            {
                jobs.map(job => <MyJobCard
                key={job._id}
                job={job}
                handleDelete={handleDelete}
                ></MyJobCard>)
            }
        </div>
        </div>
       
    );
};

export default PostedJobs;