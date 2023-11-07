import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import DetailsCard from './DetailsCard';
import BidForm from './BidForm';

const JobDetails = () => {
    let newPageTitle = 'JobFlow | Job Details';
    document.querySelector('title').textContent = newPageTitle;

    const job = useLoaderData();
    
    return (
        <div>
           <DetailsCard job={job} ></DetailsCard>
           <BidForm job={job}></BidForm>
        </div>
    );
};

export default JobDetails;