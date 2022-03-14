import React, { useContext } from 'react'
import userContext from '../context/user/UserContext'
import { deleteComment } from '../service/api'
const Comment = ({comment, setToggle, username}) => {


    const handleDelete = async () => {
        setToggle(prev => !prev)
        await deleteComment(comment._id);
    }

    const context = useContext(userContext)
    const {user} = context;


  return (
    <>
        <div className='comment m-2 ms-5 ps-3 pt-2 pb-2'>
            <p className='mb-1 d-flex justify-content-between align-items-end'>
                <span className='comment-username fw-bold'>{comment.name}&nbsp; &nbsp; &nbsp;</span>
                <span className='comment-date me-auto'>{new Date(comment.date).toDateString()}</span>
                <span className={`comment-delete me-3 ${username === user.username.substring(1, user.username.length - 1) || comment.name === user.username.substring(1, user.username.length - 1) ? "" : "d-none"}`} onClick={handleDelete}><i class="fas fa-trash"></i></span>
            </p>    
            <p className='mb-0'>{comment.comments}</p>
        </div>
    </>
  )
}

export default Comment