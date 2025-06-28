import { useEffect, useState } from "react"

const Products = [
  {id: 1, name: "product1", price: 100,IsActive:true},
  {id:2, name: "product2", price: 200,IsActive:false},
  {id:3, name: "product3", price: 300,IsActive:true}
]




function App() {
  return (
    <>
    <Header></Header>
    <ProductList></ProductList>
    </>
  )
}

function Header(){
  return(
    <h1>Header</h1>
  )
}

function ProductList(){

  const[Products, setProducts] = useState([
  {id: 1, name: "product1", price: 100,isActive:true},
  {id:2, name: "product2", price: 200,isActive:false},
  {id:3, name: "product3", price: 300,isActive:true},
  ]);

  useEffect(()=>{
  fetch("http://localhost:5205/api/Product")
  .then(response=> response.json())
  .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts([...Products,{id:Date.now(), name: "product4", price: 400,isActive:true}])
  }

  console.log("Render..");

  return(
    <>
    <h2>Product List</h2>

    {Products.map(p=>(
      <Product key={p.id} product={p} />
    ))}

    <button onClick={addProduct}>Add Product</button>

    </>
  )
}

function Product(props: any){
  return(
    <>
  {props.product.isActive ?(
    <div>
    <h3>{props.product.name}</h3> 
    <p>{props.product.price}</p>
    </div>
  ): <p>Ürün Satışta Değil</p>
  }
    </>


  );
}

export default App
