import React, { useState } from "react";
import axios from "axios";

export const ApiDemo3 = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const response = await axios.get(

        "https://dummyjson.com/comments"
      );

      console.log(response.data);

      setComments(response.data.comments);
    } catch (error) {
      console.log("Error fetching comments:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>COMMENTS TABLE</h1>

      <button onClick={getComments}>Load Comments</button>

      {comments.length > 0 && (<table className=" table table-dark"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Comment</th>
            <th>Post ID</th>
            <th>User ID</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.body}</td>
              <td>{comment.postId}</td>
              <td>{comment.user.id}</td>
              <td>{comment.user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  );
};