import { useEffect, useState } from 'react'
import './Comment.css'
function Comment({ name, comment, likes }) {
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCounts] = useState(likes-1)

    useEffect(()=>{
        setLikeCounts(likeCount + 1)
    }, [like])

    return (
        <div className="comments">
            <p>{name}</p>
            <p>{comment}</p>
            <p>Likes: {likeCount}</p>
            <button onClick={()=>{
                setLike(!like)
            }}><i> {like ? "♥️" : "like"}</i></button>
        </div>
    )
}

export default Comment