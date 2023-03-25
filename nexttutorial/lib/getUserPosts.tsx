import React from 'react'

export default async function getUserPost(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {cache: 'force-cache'})
    if(!res.ok) return undefined
  return res.json()
}
