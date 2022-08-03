import Head from 'next/head'
import { getPost } from '../../../lib/post'
import { Post } from '../../../post'
const Index = (props: any) => {
  const { posts } = props
  return (
    <div>
      <Head>
        <title>{posts?.title}</title>
        <meta name="title" content={posts?.title} />
        <meta name="description" content={posts?.body} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://62eaa50bc810e8005fc78590--aquamarine-fox-4b628c.netlify.app/posts/post-detail"
        />
        <meta property="og:title" content={posts?.title} />
        <meta property="og:description" content={posts?.body} />
        <meta property="og:image" content={posts?.thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://62eaa50bc810e8005fc78590--aquamarine-fox-4b628c.netlify.app/posts/post-detail"
        />
        <meta property="twitter:title" content={posts?.title} />
        <meta property="twitter:description" content={posts?.body} />
        <meta property="twitter:image" content={posts?.thumbnail} />
      </Head>
      <h1>{posts?.title as string}</h1>
    </div>
  )
}

//get data
export const getStaticProps = async () => {
  const posts = await getPost()

  return {
    props: {
      posts,
    },
  }
}

export default Index
