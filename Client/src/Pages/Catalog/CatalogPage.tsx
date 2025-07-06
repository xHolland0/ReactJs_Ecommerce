import { useEffect, useState } from "react";
import type { IProduct } from "../../Model/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";
import request from "../../api/requests";

export default function CatalogPage(){
    
    const [loading, setLoading] = useState(true);
    const [Products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
   request.Catalog.list()
  .then(data => setProducts(data))
  .finally(() => setLoading(false))
  }, []);
    
      if (loading) return <CircularProgress />
    
    return(
        <ProductList products={Products}/>
    );
}