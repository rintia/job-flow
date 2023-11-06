import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import DetailsCard from './DetailsCard';

const JobDetails = () => {
    const job = useLoaderData();
    const {user} = useContext(AuthContext)
    const{_id, title, email, category, deadline, maxPrice, minPrice, descrpition} =job
    return (
        <div>
           <DetailsCard job={job} ></DetailsCard>
        </div>
    );
};

export default JobDetails;