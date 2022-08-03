import { onValue, ref } from 'firebase/database'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebaseConfig'
import { Post } from '../../../post'

const Index = () => {
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    onValue(ref(db, 'posts/-N511Zc4HAfIGOa0Xy1g'), (snap) => {
      snap.val() && setPost(snap.val())
    })
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.description} />
        <meta name="image" content={post?.thumbnail} />
      </Head>
      <h1>{post?.title as string}</h1>
    </div>
  )
}

export default Index
