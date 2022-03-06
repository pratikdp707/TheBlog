import React from 'react'

const Post = () => {
    const url = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
    return (
        <>
            <div className='post-container card mt-3 p-2'>
                <img src={url} alt="post-ref" className='card-img-top' />
                <div className="card-body px-0">
                    <p className='card-subtitle text-center'>Music</p>
                    <h5 className='card-title mb-1 text-center'>Code For Interview</h5>
                    <p className='card-subtitle text-center'>Author hero</p>
                    <p className='card-text mt-1' style ={{textAlign:"justify"}}>Lorem, ipsum dolor sadasdas adasd asdasd sit amet consectetur adipisicing elit. Laborum a aperiam ipsa</p>
                </div>
            </div>
        </>
    )
}

export default Post