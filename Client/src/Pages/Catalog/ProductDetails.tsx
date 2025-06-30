import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router";
import type { IProduct } from "../../Model/IProduct";

export default function ProductDetalisPage(){
    
    const{id}=useParams(); //=> React Route Kütüphanesinden gelden useParms Parametresi İle Oluşturduğumuz ":id" Bilgisini Alıyoruz.
    
    //State Tanımları
    const [product, setProduct] = useState<IProduct | null> (null); //=> Başlangıç Değeri Null
    const [loading, setLoading] = useState(true);//=> loading; Verinin Yüklenme Durumunu Kontrol eder, setLoading; Yüklenme Durumunu Değiştirir
    
    useEffect(() => {
        fetch(`http://localhost:5205/api/Product/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [id]);

    if (loading) return <h5>Loading...</h5>

    if (!product) return <h5>Product not Found...</h5>
  
    return(
        <Typography variant="h2">{product?.name}</Typography>
    );
}