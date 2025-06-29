import { AddShoppingCart, Search } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import type { IProduct } from "../../Model/IProduct";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 4, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.02)', } }}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`http://localhost:5205/images/${product.imageUrl}`}
          alt={product.name}
          sx={{
            objectFit: "contain",
            padding: 2,
            backgroundColor: "#f9f9f9"
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600 }}
          >
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        
        <Button variant="contained" size="small" startIcon={<AddShoppingCart />} color="success"> Add to Cart </Button>
        
        <Button variant="outlined" size="small" startIcon={<Search />} color="primary" > View </Button>
      
      </CardActions>
      
    </Card>
  );
}
