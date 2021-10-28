import { Divider, IconButton, Typography, List, Box } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { useTheme } from "@emotion/react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from "react-router-dom";


const Sidebar = ({ menu, setMenu }) => {

    const theme = useTheme();

    return (
        <Drawer sx={{
            width: 250,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                backgroundColor: "#64C7F2",
                marginTop: 9,
                boxSizing: 'border-box',
                height: '91%',
                width: 250,
                position: "absolute",
            },

        }}
            variant="persistent"
            anchor="left"
            open={menu}>
            <Divider />
            <List>
                <Link to='/productos' style={{ textDecoration: "none" }}>
                    <IconButton size="medium" edge="end" color="default" aria-label="menu" sx={{ mr: 2, marginLeft:2 }} >
                        <InventoryIcon fontSize="medium" sx={{ color: "black" }} />
                        <Box sx={{ color: "black", marginLeft: 2 }}>Productos</Box>
                    </IconButton>
                </Link>
                <Link to='/ventas' style={{ textDecoration: "none" }}>
                    <IconButton size="medium" edge="end" color="default" aria-label="menu" sx={{ mr: 2, marginLeft:2}} >
                        <ShoppingCartIcon fontSize="medium" sx={{ color: "black" }} />
                        <Box sx={{ color: "black", marginLeft: 2 }}>Ventas</Box>
                    </IconButton>
                </Link>
                <Link to='/usuarios' style={{ textDecoration: "none" }}>
                    <IconButton size="medium" edge="end" color="default" aria-label="menu" sx={{ mr: 2, marginLeft:2}} >
                        <PeopleAltIcon fontSize="medium" sx={{ color: "black" }} />
                        <Box sx={{ color: "black", marginLeft: 2 }}>Usuarios</Box>
                    </IconButton>
                </Link>

            </List>
        </Drawer>
    )
}

export default Sidebar;