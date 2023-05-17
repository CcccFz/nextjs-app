import Link from 'next/link'

export default function Posts({date, posts}: any) {
  return (
    <>
      <div>{date}</div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const date = new Date().toString();
  const rsp = await fetch('https://dummyjson.com/posts');
  const { posts } = await rsp.json();

  return {
    props: {
      date,
      posts
    }
  }
}