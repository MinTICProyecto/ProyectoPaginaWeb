
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Box, Typography, TextField } from "@mui/material"
import Button from "@mui/material/Button";


const Productos = () => {

    const data = [
        { _id: '001', descripcion: 'Producto 1', vunitario: 120000, estado: 'Disponible' },
        { _id: '002', descripcion: 'Producto 2', vunitario: 20000, estado: 'No Disponible' },
        { _id: '003', descripcion: 'Producto 3', vunitario: 200000, estado: 'Disponible' }

    ];

    return (
        <div>
            <Typography color="black" > 
            <Box sx={{ flexGrow: 1, textAlign: "center", paddingTop: "2vh", fontSize:30, fontWeight:"bold" }}>PRODUCTOS</Box> </Typography>
            
            <Box sx={{ display: "flex", justifyContent: "left", paddingTop: "5vh" }}>
            <Typography variant="h6" color="black" sx={{ marginLeft:"20%", marginRight:"20px"}}>   
            <Box>Buscar Productos </Box>
            </Typography>
            <TextField id="busqueda" variant="standard"  style={{size:50, fontSize:50}}/>
            </Box>
            
            
            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5vh" }}>
                <Table hover size="sm" bordered="true" style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>ID</th>
                            <th>Descripcion</th>
                            <th>Valor Unitario</th>
                            <th>Estados</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((info) => (
                                <tr>
                                    <td>{info._id}</td>
                                    <td>{info.descripcion}</td>
                                    <td>{info.vunitario}</td>
                                    <td>{info.estado}</td>
                                    <td>
                                        <div style={{ width: "100%", justifyContent: "center", display: "inline-flex", columnGap: 20 }}>
                                            <Button variant="contained" color="error" sx={{ fontSize: 13 }}> Eliminar</Button>
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
            <Button variant="contained" color="primary" sx={{ fontSize: 17, }}> CREAR PRODUCTO</Button>
            </Box>
        </div>
    )
}

export default Productos;