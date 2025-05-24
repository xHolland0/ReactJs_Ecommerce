import {useState} from "react";
import {useEffect} from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductsList from "./ProductList";
import {Container, CssBaseline} from "@mui/material";



function App() {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("http://localhost:5062/api/products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    
    
    
    return (
      <>
          <CssBaseline />
          
        <Header/>
          
          <Container>
              <ProductsList products={products}/>
          </Container>

      </>


  )
}
export default App
