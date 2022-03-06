import React from 'react'
import Banner from './Banner';
import Categories from './Categories';
import Navbar from './Navbar';
import Posts from './Posts';

const Home = () => {
    return (
        <>
            <Banner />
            <div className="row">
                <div className="col col-lg-2 col-md-3 col-sm-4 col-12">
                    <Categories />
                </div>
                <div className="col col-lg-10 col-md-9 col-sm-8 col-12">
                    <Posts />
                </div>
            </div>
        </>
    )
}

export default Home;