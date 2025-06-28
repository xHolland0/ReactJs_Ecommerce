import { useEffect, useState } from "react"
import type { IProduct } from "../Model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";
import { Container, CssBaseline } from "@mui/material";


function App() {

  const[Products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
  fetch("http://localhost:5205/api/Product")
  .then(response=> response.json())
  .then(data => setProducts(data))
  }, []);




  return (
    <>
    <CssBaseline/>
    <Header/>

    <Container>
      <ProductList products={Products}/>
    </Container>
    </>
  )
}




export default App
