import React from 'react';
import Banner from './Banner';
import CategoryTab from './CategoryTab';
import GetStarted from './GetStarted';


const Home = () => {
    let newPageTitle = 'JobFlow';
    document.querySelector('title').textContent = newPageTitle;
    return (
        <div>
            <Banner></Banner>
            <CategoryTab></CategoryTab>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;