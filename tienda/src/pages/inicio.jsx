
import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import GoogleIcon from '@mui/icons-material/Google';
import "../styles/inicio.css";
import {Link} from 'react-router-dom';

const Inicio = () => {
    return (
        <Box sx={{ backgroundColor: "#B6F4FF", display:"flex", justifyContent:"center", alignItems:"center", height:'100vh'}} >
            <Box sx={{alignItems:"center"}}> 
                <Card variant="outlined">
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ paddingLeft: 2 }}>
                            Inicio de Sesion
                        </Typography>
                        <Divider />
                        <Stack component="form" sx={{ '& .MuiTextField-root': { m: 3, width: '100ch' }, alignItems: "center", paddingTop: 5 }}>
                            <TextField label="Escriba su correo" variant="outlined" />
                            <TextField label="Escriba contrasena" type="password" variant="outlined" />
                            <Link to="/">
                            <Button variant="contained" size="50" color="success" sx={{fontSize:17}}> Iniciar Sesion</Button>
                            </Link>
                            <Typography gutterBottom variant="h6" component="div" sx={{paddingTop:2, paddingBottom:2}}>
                                O
                            </Typography>
                            <Link to="/">
                            <Button variant="contained" endIcon={<GoogleIcon />} color="warning" size="50" sx={{fontSize:17}}> Google</Button>
                            </Link>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );


}

export default Inicio;