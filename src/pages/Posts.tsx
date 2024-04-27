import { useEffect, useState } from 'react'
import AddElement from '../components/AddElement/AddElement'
import PostElement from '../components/PostElement/PostElement'
import { IPostElement } from '../models/interfaces'

const Posts = () => {
  const [posts, setPosts] = useState<IPostElement[]>([]);

  useEffect(() => {
    fetch('http://localhost:7030/posts')
    .then(res => res.json())
    .then(result => setPosts(result))
    .catch(e => console.log('Ааааа, ошибка: ' + e))
  }, []);

  return (
    <div className='container'>
      <AddElement />
      {posts.map(e => <PostElement key={e.id} id={e.id} content={e.content} created={e.created} /> )}
    </div>
  )
}

export default Posts
