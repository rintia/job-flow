import React from 'react';
import Banner from './Banner';
import CategoryTab from './CategoryTab';


const Home = () => {
    let newPageTitle = 'JobFlow';
    document.querySelector('title').textContent = newPageTitle;
    return (
        <div>
            <Banner></Banner>
            <CategoryTab></CategoryTab>
        </div>
    );
};

export default Home;