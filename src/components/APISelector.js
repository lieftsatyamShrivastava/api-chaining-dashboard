import React from 'react';

const APISelector = ({ onSelectAPI }) => {
  const apis = [
    { name: 'Get Users', url: 'https://jsonplaceholder.typicode.com/users', method: 'GET' },
    { name: 'Create Post', url: 'https://jsonplaceholder.typicode.com/posts', method: 'POST' },
    { name: 'Get Comments', url: 'https://jsonplaceholder.typicode.com/comments', method: 'GET' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Select API</h2>
      <ul>
        {apis.map((api, idx) => (
          <li key={idx} onClick={() => onSelectAPI(api)} className="cursor-pointer hover:text-blue-600">
            {api.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APISelector;
