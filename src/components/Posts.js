import React from 'react'
import Post from './Post'
import {Link} from 'react-router-dom'
const Posts = () => {

    const posts = [1,1,1,1,1,1,1,1,1,1,1,,1,1,1];

  return (
    <>
        <div className="row row-cols-auto">
            {posts.map(post => (
                <div className="col mx-auto">
                <Link to="/details" style={{textDecoration:"none", color:"inherit"}}><Post/></Link>
                </div>
            ))}
        </div>
    </>
  )
}

export default Posts