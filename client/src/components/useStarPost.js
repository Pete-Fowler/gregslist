import { useState } from 'react';

export default function useStarPost(userId, postId) {
  const [ result, setResult ] = useState(null);

  fetch(`/users/${userId}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({saved: [postId]})
  })
  .then(r => {
    if(r.ok) {
      r.json().then(data => setResult(data));
    } else {
      r.json().then(err => setResult(err.errors));
    }
  })
  return result;
}