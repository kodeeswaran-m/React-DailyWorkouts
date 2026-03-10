import { useLoaderData } from "react-router-dom";
export async function productsLoader() {
  const res = await fetch("https://dummyjson.com/products");

  const data = await res.json();

  return data.products;
}
const Products = () => {

  const products = useLoaderData();

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;