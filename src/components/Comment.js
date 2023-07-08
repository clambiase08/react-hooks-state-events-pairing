import React from 'react'

export default function Comment({comment, user}) {
  return (
    <div>
        <h3>{user}</h3>
        <p>{comment}</p>
    </div>
  )
}
