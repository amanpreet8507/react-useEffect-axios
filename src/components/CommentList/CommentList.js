import axios from "axios";
import Comment from "../Comment/Comment";
import { useEffect, useState } from "react";

function CommentList() {
  const comments = [];
  const [commentList, setCommentList] = useState(comments)

  const fetchCommentsList = async () => {
    const commentsData = await axios.get('https://project-1-api.herokuapp.com/comments?api_key=0c1318a1-0c91-4df5-9cfa-b8cbad39d045')
    setCommentList(commentsData.data)
  }
  

  useEffect(() =>{
    fetchCommentsList()
  },[])

  console.log('update comments list')

  return (
    <div>
      {commentList.map((comment) => {
        return <Comment key={comment.id} name={comment.name} comment={comment.comment} likes={comment.likes} />;
      })}
    </div>
  );
}

export default CommentList;
