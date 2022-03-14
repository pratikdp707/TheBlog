import React, { useContext, useEffect } from 'react'
import userContext from '../context/user/UserContext';
import { getCookie } from '../helpers/auth';
import Banner from './Banner';
import Categories from './Categories';
import Posts from './Posts';

const Home = (props) => {

    const context = useContext(userContext)
    const { getUser, user } = context;
    const authToken = getCookie('token');

    useEffect(() => {
        getUser(authToken);
        console.log(user)
        // props.setAuthuser(true);
    }, [])

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