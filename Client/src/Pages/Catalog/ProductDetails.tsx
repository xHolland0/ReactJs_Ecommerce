import { CircularProgress, Divider, Grid, Table,TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IProduct } from "../../Model/IProduct";
import request from "../../api/requests";

export default function ProductDetalisPage(){
    
    const{id}=useParams<{id: string}>(); //=> React Route Kütüphanesinden gelden useParms Parametresi İle Oluşturduğumuz ":id" Bilgisini Alıyoruz.
    
    //State Tanımları
    const [product, setProduct] = useState<IProduct | null> (null); //=> Başlangıç Değeri Null
    const [loading, setLoading] = useState(true);//=> loading; Verinin Yüklenme Durumunu Kontrol eder, setLoading; Yüklenme Durumunu Değiştirir
    
    useEffect(() => {
        id && request.Catalog.details(parseInt(id))
        .then(data => setProduct(data))
        .finally(() => setLoading(false))
    }, [id]);

    if (loading) return <CircularProgress />

    if (!product) return <h5>Product not Found...</h5>
  
    return(
        <Grid container spacing={2}>
            <Grid size={{xl:3,lg: 4, md: 5, sm:6, xs:12}}>
                <img src={`http://localhost:5205/images/${product.imageUrl}`} style={{width:"100%"}} />
            </Grid>

            <Grid size={{xl:3,lg: 8, md: 7,sm:6, xs:12}}>
                <Typography variant="h3">{product.name}</Typography>

                <Divider sx={{mb:2}}/>

                <Typography variant="h4" color="text.secondary">${product.price.toFixed(2)}</Typography>

                <TableContainer>
                    <Table>
                        <TableBody>

                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Stock</TableCell>
                                <TableCell>{product.stock}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}