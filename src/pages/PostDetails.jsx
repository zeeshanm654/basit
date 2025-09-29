import { CloudDone, CloudySnowing } from '@mui/icons-material';
import axios from "axios";

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const PostDetails = () => {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState();
  const { comments, postTitle, postDetail, userId } = location.state || {};


  const getUserData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setName(response.data.name)

    } catch (error) {
      console.log(error)
    }
  }
 


  useEffect(() => {
    getUserData()
  }, []);

  return (
    <div>
      <h2> Title: {postTitle} </h2>
      <p> Post Detail: {postDetail}</p>
      {comments.map((comment, index) => (
        <p key={comment.id}> {index + 1}: {comment.name}</p>
      ))}
      <p>posted by: {name}</p>
    </div>
  )
}

export default PostDetails
