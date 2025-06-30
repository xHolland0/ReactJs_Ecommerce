import { FlareSharp, ShoppingCart } from "@mui/icons-material";
import { AppBar, ListItem, Toolbar, Typography, List,Box, colors, IconButton, Badge} from "@mui/material";
import { NavLink } from "react-router";

const links = [
  {title: "Home", to:"/"},
  {title: "Catalog", to:"/catalog"},
  {title: "Abaout", to:"/about"},
  {title: "Contact", to:"/contact"}
]

const navStyles={
  color:"inherit",
  textDecoration:"none",

  "&:hover":{
    color:"text.primary"
  },

  "&.active":{
    color:"text.primary"
  }
}

export default function Header(){
  return(
    <AppBar position="static" sx={{mb:4}}>
      <Toolbar sx={ {display:"flex", justifyContent:"space-between"} }>
        
        <Box sx={ {display:"flex", alignItems:"center"} }>

          <Typography variant="h6">E-Commerce</Typography>
          <List sx={ {display:"flex"} }>

            {links.map(link=> //Dizi Öğelerini Dönüştürerek Ürünleri Listeliyoruz 
            <ListItem component={NavLink} to={link.to} sx={navStyles}> {link.title} </ListItem>
            )}

          </List>

        </Box>

        <Box sx={ {display:"flex", alignItems:"center"} }>
          <IconButton size="large" edge="start" color="inherit">

            <Badge badgeContent="2" color="secondary">
              <ShoppingCart />
            </Badge>

          </IconButton>
        </Box>


      </Toolbar>
    </AppBar>
  )
}


