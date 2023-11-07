import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const AddJob = () => {
    let newPageTitle = 'JobFlow | Add Job';
    document.querySelector('title').textContent = newPageTitle;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddJob = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const title = form.title.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const descrpition = form.description.value;

        const newJob = {email, title, category, maxPrice, minPrice, deadline, descrpition}

        console.log(newJob);

        const url = 'http://localhost:5000/jobs'

        
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newJob)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
    
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Job Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            
                          })
                       
                          
                        // form.reset()
                        
                    }
                navigate('/postedJobs')
                 
                })

                

    }


    return (
        <div className="p-4 md:p-12 lg:p-24">
            <h2 className="text-3xl text-dark mb-12 font-extrabold text-center">Add A New Job</h2>
            <form onSubmit={handleAddJob}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" defaultValue={user.email} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="select select-bordered w-full">
                            <option disabled selected>Choose One Category</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Min Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="minPrice" placeholder="Min Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Max Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="maxPrice" placeholder="Max Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-dark">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
              
              
              <input type="submit" value="Add Job" className=" btn btn-block bg-dark text-light hover:bg-brown" />
              
               

            </form>
        </div>
    );
};

export default AddJob;