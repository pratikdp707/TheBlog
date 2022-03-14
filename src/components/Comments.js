import React, { useContext, useEffect, useState } from 'react'
import userContext from '../context/user/UserContext';
import { newComment } from '../service/api';
import { getComment } from '../service/api';
import Comment from './Comment';

const initialValue = {
    name : "",
    postId : "",
    date : new Date(),
    comments : ""
}

const Comments = (props) => {

    const context = useContext(userContext);
    const {user} = context;
    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([])
    const [toggle, setToggle] = useState(false)

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: user.username.substring(1, user.username.length - 1),
            postId : props.id,
            comments : e.target.value
        })
        console.log(comment);
    }

    const postComment = async (e) => {
        await newComment(comment)
        setToggle(prev =>  !prev)
        setComment(initialValue)
    }

    useEffect(() => {
      const getData = async () => {
        let response  =  await getComment(props.id)
        setComments(response)
      }
      getData();
    }, [props.id, toggle])
    

    return (
        <>
            <div className='my-5'>
                <div className='d-flex align'>
                    <i className="fas fa-comment-alt fs-3 m-2"></i>
                    <textarea className='fs-5 m-2  w-100' type="text" rows={3} name="comment" placeholder='Write your comment here...' value={comment.comments} onChange = {handleChange}></textarea>
                </div>
                <div className='d-flex justify-content-end'>
                <button className='btn btn-large btn-dark me-2' onClick={postComment}>Post</button>
                </div>
            </div>
            {
                comments && comments.map(comment => (
                    <Comment comment= {comment} setToggle={setToggle} username ={props.username}/> 
                ))
            }

        </>
    )
}

export default Comments