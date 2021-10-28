
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Box, Typography, TextField } from "@mui/material"
import Button from "@mui/material/Button";


const Usuarios= () => {

    const data = [
        { _id: '001', nombre: 'Albert Einstein', rol: 'Administrador', estado: 'Autorizado' },
        { _id: '002', nombre: 'Isaac Newton', rol: 'Administrador', estado: 'Autorizado' },
        { _id: '003', nombre: 'Stephen Hawking', rol: 'Administrador', estado: 'Autorizado' },
        { _id: '003', nombre: 'Pepito Perez', rol: 'Pendiente', estado: 'No Autorizado' }

    ];

    return (
        <div>
            <Typography color="black" > 
            <Box sx={{ flexGrow: 1, textAlign: "center", paddingTop: "2vh", fontSize:30, fontWeight:"bold" }}>USUARIOS</Box> </Typography>
            
            <Box sx={{ display: "flex", justifyContent: "left", paddingTop: "5vh" }}>
            <Typography variant="h6" color="black" sx={{ marginLeft:"20%", marginRight:"20px"}}>   
            <Box>Buscar Usuario </Box>
            </Typography>
            <TextField id="busqueda" variant="standard"  style={{size:50, fontSize:50}}/>
            </Box>
            
            
            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5vh" }}>
                <Table hover size="sm" bordered="true" style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((info) => (
                                <tr>
                                    <td>{info._id}</td>
                                    <td>{info.nombre}</td>
                                    <td>{info.rol}</td>
                                    <td>{info.estado}</td>
                                    <td>
                                        <div style={{ width: "100%", justifyContent: "center", display: "inline-flex", columnGap: 20 }}>
                                            <Button variant="contained" color="success" sx={{ fontSize: 13 }}> Editar</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5vh" }}>
            <Button variant="contained" color="primary" sx={{ fontSize: 17, }}> CREAR USUARIO</Button>
            </Box>
        </div>
    )
}

export default Usuarios;