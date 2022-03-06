import React from 'react'
import banner from '../constants/banner.jpg'
const Banner = () => {

    
    return (
        <>
            <div className='container-fluid d-flex align-items-center justify-content-center' style={{
                background: `url(${banner}) center/100% repeat-x #000`,
                width: "100%",
                height: "50vh"
            }}>
                <p className='text-center banner-text'>The Blog</p>
            </div>
        </>
    )
}

export default Banner