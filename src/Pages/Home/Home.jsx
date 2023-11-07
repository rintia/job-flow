import React from 'react';
import Banner from './Banner';
import CategoryTab from './CategoryTab';
import GetStarted from './GetStarted';
import AboutUs from './AboutUs';


const Home = () => {
    let newPageTitle = 'JobFlow';
    document.querySelector('title').textContent = newPageTitle;
    return (
        <div>
            <Banner></Banner>
            <CategoryTab></CategoryTab>
            <GetStarted></GetStarted>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;