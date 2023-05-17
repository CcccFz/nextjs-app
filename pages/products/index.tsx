import Link from "next/link";

export default function Products({date, products}: any) {
  return (
    <>
      <div>{date}</div>
      {products.map((product: any) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <strong>{product.title}</strong>
          </Link> ${product.price}
        </div>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const date = new Date().toString();
  const rsp = await fetch('https://dummyjson.com/products');
  const { products } = await rsp.json()

  return {
    props: {
      date,
      products
    }
  }
}