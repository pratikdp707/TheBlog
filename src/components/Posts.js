import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Link, useLocation } from 'react-router-dom'
import { getAllPosts } from '../service/api'
const Posts = () => {

  const [posts, setPosts] = useState([])
  const { search } = useLocation();
  // const posts = [1,1,1,1,1,1,1,1,1,1,1,,1,1,1];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts(search);
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, [search])


  return (
    <>
      <div className="row row-cols-auto px-5 pb-5">
        {posts && posts.map(post => (
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <Link to={`/details/${post._id}`} style={{ textDecoration: "none", color: "inherit" }}><Post post={post} /></Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Posts