import React from 'react';
import Details from '../Details/Details';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Nearby from '../Nearby/Nearby';
import Overview from '../Overview/Overview';
import SimiliarProparties from '../SimilarProperties/SimiliarProparties';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header></Header>
            <Overview></Overview>
            <Details></Details>
            <Features></Features>
            <Nearby></Nearby>
            <SimiliarProparties></SimiliarProparties>
        </div>
    );
};

export default Home;