import React from 'react'

const Post = (props) => {
    const post = props.post;
    const url = post.picture || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + "..." : str;
    }

    return (
        <>
            <div className='post-container card mt-3 pt-2 px-2'>
                {/* <img src={url} alt="post-ref" className='card-img-top' /> */}
                <div className="card-body px-0">
                    <h5 className='card-title mb-2 text-center fw-bold'>{post.title}</h5>

                    <div className='d-flex justify-content-between'>
                        <p className='card-subtitle mb-2 ps-2'>{new Date(post.createdDate).toDateString()}</p>
                        <p className='card-subtitle mb-2 pe-2'>{post.category} - {post.subcategory}</p>
                    </div>
                    <p className='card-text mt-1 ps-2'>{addEllipsis(post.description, 100)}</p>
                    <p className='card-subtitle text-left pb-0 ps-2'>Author - {post.username}</p>
                </div>
            </div>
        </>
    )
}

export default Post