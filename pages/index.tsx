import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div><Link href="/posts">Posts</Link></div>
      <div><Link href="/products">Products</Link></div>
      <div><Link href="/docs">Doc</Link></div>
      <div><Link href="/about">About</Link></div>
      <div style={{marginTop: '1000px'}}></div>
    </main>
  )
}
