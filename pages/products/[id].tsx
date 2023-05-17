import { useRouter } from "next/router";
import Image  from 'next/image'

export default function Product({date, product}: any) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <div>{date}</div>
      <div>
        <h1>{product.title}</h1> <div>{product.price}</div>
          {product.images.map((imageUrl: string, idx: number) => (
            <Image key={`img-${idx}`} src={imageUrl} alt="" width={320} height={480}/>
          ))}
        <p>{product.description}</p>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [

    ],
    fallback: true
  }
}

export async function getStaticProps(ctx: any) {
  const date = new Date().toString();
  const rsp = await fetch(`https://dummyjson.com/products/${ctx.params.id}`)
  const product = await rsp.json();

  return {
    props: {
      date,
      product
    }
  }
}