import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu]= useState(false);
    return(
        <AppBar position="static">
            <Toolbar sx={{backgroundColor:"#75FCF2"}}>
               <IconButton size="large" edge="start" color="default" aria-label="menu" sx={{mr:2}}>
               <MenuIcon fontSize="large"/>
               </IconButton>
               <Typography variant="h5" color="black" component="div" sx={{flexGrow: 1}}> Sistema de Ventas</Typography>
               <IconButton size="large" aria-label="account" color="default" sx={{mr:2}}>
                <AccountCircleIcon fontSize="large"/>
               </IconButton>
            </Toolbar>

        </AppBar>

    )
}

export default Navbar;
