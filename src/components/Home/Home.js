import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';

import Header from '../Shared/Header';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;