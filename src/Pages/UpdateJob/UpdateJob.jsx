import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateJob = () => {
    const {user} = useContext(AuthContext)
    const job = useLoaderData();
    
    const{_id, title, maxPrice, minPrice, descrpition, category, deadline} = job;
    console.log(job);
    const handleUpdateJob = e =>{
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const title = form.title.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const descrpition = form.description.value;

        const updatedJob = {email, title, category, maxPrice, minPrice, deadline, descrpition};

        fetch(`https://job-flow-server.vercel.app/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <h1 className='text-dark text-center my-12 text-5xl font-bold'>Update Job</h1>
            <form onSubmit={handleUpdateJob}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="email" name="email" defaultValue={user.email} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={title} type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span  className="label-text ">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={deadline} type="date" name="deadline" placeholder="Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="select select-bordered w-full">
                            <option selected>{category}</option>
                            <option >Web Development</option>
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
                            <input defaultValue={minPrice} type="text" name="minPrice" placeholder="Min Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Max Price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={maxPrice} type="text" name="maxPrice" placeholder="Max Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span defaultValue={descrpition} className="label-text text-dark">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={descrpition} type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
              
              <input type="submit" value="Update Job" className=" btn btn-block bg-dark text-light hover:bg-brown" />
              
               

            </form>
        </div>
    );
};

export default UpdateJob;