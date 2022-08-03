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
        <meta name="title" content={post?.title} />
        <meta name="description" content={post?.description} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://62eaa50bc810e8005fc78590--aquamarine-fox-4b628c.netlify.app/posts/post-detail"
        />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={post?.thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://62eaa50bc810e8005fc78590--aquamarine-fox-4b628c.netlify.app/posts/post-detail"
        />
        <meta property="twitter:title" content={post?.title} />
        <meta property="twitter:description" content={post?.description} />
        <meta property="twitter:image" content={post?.thumbnail} />
      </Head>
      <h1>{post?.title as string}</h1>
    </div>
  )
}

export default Index
