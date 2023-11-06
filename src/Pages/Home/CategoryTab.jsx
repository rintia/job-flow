import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const CategoryTab = () => {
   
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    console.log(jobs);
    const jobOne =  jobs.filter(job => job.category === 'Web Development');
    const jobTwo =  jobs.filter(job => job.category === 'Graphics Design');
    const jobThree =  jobs.filter(job => job.category === 'Digital Marketing');
    console.log(jobOne);
    return (
        <div>
            <Tabs >
                <TabList className={'flex justify-center gap-12 '}>
                    <Tab>Web Development</Tab>
                    <Tab>Graphics Design</Tab>
                    <Tab>Digital Marketing</Tab>
                </TabList>

               
                <TabPanel>
                   <div className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                   {
                     jobOne.map(job => <JobCard
                     key={job._id}
                     job={job}
                     ></JobCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                   {
                     jobTwo.map(job => <JobCard
                     key={job._id}
                     job={job}
                     ></JobCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                   {
                     jobThree.map(job => <JobCard
                     key={job._id}
                     job={job}
                     ></JobCard>)
                    }
                   </div>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default CategoryTab;