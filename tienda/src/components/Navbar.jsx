import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Sidebar from "./Sidebar";
const altura=70;

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const openSidebar = () => {
        setMenu(true);
    } 
    const closeSidebar = () => {
        setMenu(false);
    } 
    return (
        <div>
        <AppBar position="static">
            <Toolbar sx={{ backgroundColor: "#75FCF2" }}>
                <IconButton size="large" edge="start" color="default" aria-label="menu" sx={{ mr: 2, height:altura}} onClick={()=>{menu != true ? openSidebar(): closeSidebar()}} >
                    <MenuIcon fontSize="large" />
                </IconButton>
                <Typography variant="h5" color="black" component="div" sx={{ flexGrow: 1 }}> Sistema de Ventas</Typography>
                <IconButton size="large" aria-label="account" color="default" sx={{ mr: 2 }}>
                    <AccountCircleIcon fontSize="large" />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Sidebar menu={menu} setMenu={setMenu}/>
        </div>
 
    )
}


export default Navbar;
