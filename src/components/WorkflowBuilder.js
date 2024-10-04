import React, { useState } from 'react';
import axios from 'axios';

const WorkflowBuilder = () => {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createPost = async (userId) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Sample Title',
        body: 'Sample Body',
        userId,
      });
      setPost(response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAPIChain = async () => {
    await fetchUsers(); // Step 1
    const userId = users[0]?.id; // Assume first user
    await createPost(userId); // Step 2
    await fetchComments(post?.id); // Step 3
  };

  return (
    <div className="p-4">
      <button onClick={handleAPIChain} className="bg-blue-500 text-white p-2 rounded">
        Start API Chain
      </button>
      <div className="mt-4">
        <h3>Users:</h3>
        <pre>{JSON.stringify(users, null, 2)}</pre>
        <h3>Post:</h3>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <h3>Comments:</h3>
        <pre>{JSON.stringify(comments, null, 2)}</pre>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
