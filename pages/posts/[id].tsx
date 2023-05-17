import { useRouter } from "next/router";

export default function Post({date, post}: any) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <div>{date}</div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

export async function getStaticPaths(ctx: any) {
  return {
    paths: [
      {params: {id: '1'}},
      {params: {id: '2'}}
    ],
    fallback: true
  } 
}

export async function getStaticProps(ctx: any) {
  const date = new Date().toString();
  const rsp = await fetch(`https://dummyjson.com/posts/${ctx.params.id}`)
  const post = await rsp.json();

  return {
    props: {
      date,
      post
    }
  }
}