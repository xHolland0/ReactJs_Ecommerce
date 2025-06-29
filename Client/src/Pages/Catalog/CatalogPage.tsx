import { useEffect, useState } from "react";
import type { IProduct } from "../../Model/IProduct";
import ProductList from "./ProductList";

export default function CatalogPage(){
    
    
    const[Products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
  fetch("http://localhost:5205/api/Product")
  .then(response=> response.json())
  .then(data => setProducts(data))
  }, []);
    
    
    return(
        <ProductList products={Products}/>
    );
}