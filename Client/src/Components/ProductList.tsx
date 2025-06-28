import type { IProduct } from "../Model/IProduct";
import Product from "./Product";

interface Props{
    products: IProduct[];
    addProduct: ()=> void;
}


export default function ProductList({products, addProduct}:Props){
  return(
    <div>
      <h2>Product List</h2>

    {products.map((p: IProduct)=>(
      <Product key={p.id} product={p} />
    ))}

      <button onClick={ addProduct }>Add Product</button>

    </div>
  )
}