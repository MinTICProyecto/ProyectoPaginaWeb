import { Divider, IconButton, Typography, List } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { useTheme } from "@emotion/react";
import CloseIcon from '@mui/icons-material/Close';
import { fontSize } from "@mui/system";


const Sidebar = ({menu, setMenu, altura}) => {

    const theme = useTheme();

    return (
        <Drawer  sx={{
            width: 250,
            flexShrink: 0,
             '& .MuiDrawer-paper': {
                backgroundColor:"#64C7F2",
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
            <Divider/>
            <List>
                

            </List>
        </Drawer>
    )
}

export default Sidebar;