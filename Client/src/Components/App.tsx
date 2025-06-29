import { useEffect, useState } from "react"
import type { IProduct } from "../Model/IProduct";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";


function App() {

  return (
    <>
    <CssBaseline/>
    <Header/>

    <Container>

      {/* <ProductList products={Products}/> */}
      <Outlet />

    </Container>
    </>
  )
}




export default App
