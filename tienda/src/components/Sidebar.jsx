import { Divider, IconButton, Typography, List } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { useTheme } from "@emotion/react";
import CloseIcon from '@mui/icons-material/Close';


const Sidebar = ({menu, setMenu, altura}) => {

    const theme = useTheme();

    return (
        <Drawer  sx={{
            width: 250,
            flexShrink: 0,
             '.MuiDrawer-root':{
                paddingTop:100,
               height: 100,
             },
             '& .MuiDrawer-paper': {
                 marginTop: 9,
                 boxSizing: 'border-box',
                 height: '91%',
                 width: 250,
                position: "absolute",
              },
             
          }}
          variant="persistent"
          anchor="left"
          open={menu}
          >
            <IconButton onClick={()=>{setMenu(false)}}>
                {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
            </IconButton>
            <Divider/>
            <List>

            </List>
        </Drawer>
    )
}

export default Sidebar;