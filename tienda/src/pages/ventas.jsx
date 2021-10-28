
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Box, Typography, TextField } from "@mui/material"
import Button from "@mui/material/Button";


const Ventas = () => {

    const data = [
        { _id: '001', cliente: 'Juan Perez', documento: 9845323, vcompra: 1150000, fecha: '12/01/2021', encargado:"Pepito" },
        { _id: '001', cliente: 'Camilo Garcia', documento: 10064532, vcompra: 50000, fecha: '12/01/2021', encargado:"Pepito" },
        { _id: '001', cliente: 'Pedro Infante', documento: 112349405, vcompra: 12000000, fecha: '12/01/2021', encargado:"Pepito" }

    ];

    return (

        <div>
            <Typography color="black" > 
            <Box sx={{ flexGrow: 1, textAlign: "center", paddingTop: "2vh", fontSize:30, fontWeight:"bold" }}>VENTAS</Box> </Typography>
            
            <Box sx={{ display: "flex", justifyContent: "left", paddingTop: "5vh" }}>
            <Typography variant="h6" color="black" sx={{ marginLeft:"20%", marginRight:"20px"}}>   
            <Box
            
            >Buscar Venta </Box>
            </Typography>
            <TextField id="busqueda" variant="standard"  style={{size:50, fontSize:50}}/>
            </Box>
            
            
            <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5vh" }}>
                <Table hover size="sm" bordered="true" style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Documento</th>
                            <th>Valor de la Venta</th>
                            <th>Fecha</th>
                            <th>Encargado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((info) => (
                                <tr>
                                    <td>{info._id}</td>
                                    <td>{info.cliente}</td>
                                    <td>{info.documento}</td>
                                    <td>{new Intl.NumberFormat().format(info.vcompra)}</td>
                                    <td>{info.fecha}</td>
                                    <td>{info.encargado}</td>
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
            <Button variant="contained" color="primary" sx={{ fontSize: 17, }}> CREAR VENTA</Button>
            </Box>
        </div>
    )
}

export default Ventas;