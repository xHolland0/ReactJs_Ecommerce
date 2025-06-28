import { useEffect, useState } from "react"
import type { IProduct } from "../Model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";


function App() {

  const[Products, setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
  fetch("http://localhost:5205/api/Product")
  .then(response=> response.json())
  .then(data => setProducts(data))
  }, []);

  function addProduct(){
    setProducts([...Products,
      {
      id: Date.now(), 
      name: "product4", 
      price: 400, 
      isActive: true,
      description: "",
      imageUrl: "",
      stock: 1
    }])
  }



  return (
    <>
    <Header products={Products} />
    <ProductList products={Products} addProduct={addProduct}/>
    </>
  )
}




export default App
