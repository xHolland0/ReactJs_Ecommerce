import { useEffect, useState } from "react";
import type { IProduct } from "../../Model/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";

export default function CatalogPage(){
    
    const [loading, setLoading] = useState(true);
    const[Products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
  fetch("http://localhost:5205/api/Product")
  .then(response=> response.json())
  .then(data => setProducts(data))
  .finally(() => setLoading(false))
  }, []);
    
      if (loading) return <CircularProgress />
    
    return(
        <ProductList products={Products}/>
    );
}