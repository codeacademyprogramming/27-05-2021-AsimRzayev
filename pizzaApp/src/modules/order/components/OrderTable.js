import {
    Box,
    Paper,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React from "react";
const initialStatus = {
    CREATED:"CREATED",
    IN_PROGRESS:"IN_PROGRESS",
    DONE:"DONE"
};


function StudentsAttendanceTable({ orders,open,handlePizzaEditID }) {
   
    return (
        <Box marginTop={2}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                 
                            <TableCell>
                                Id
                            </TableCell>
                            <TableCell >
                                Name
                            </TableCell>
                            <TableCell >
                                Count
                            </TableCell>
                            <TableCell >
                                Additional
                            </TableCell>
                            <TableCell style={{ cursor: "pointer" },{background:"lightblue"}} onClick={()=>orders.sort((a, b) => a.status.localeCompare(b.status))}>
                                Status
                            </TableCell>
                            
                            <TableCell >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => {
                            return (
                                <TableRow key={order.id}>
                                     <TableCell>
                                        <b>{`${order.id}`}</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>{`${order.pizzaName}`}</b>
                                    </TableCell>
                                    <TableCell>
                                        {order.pizzaCount}
                                    </TableCell>
                             
                                    <TableCell>
                                        {order.pizzaAddition}
                                    </TableCell>
                                    <TableCell>
                                    <Button variant="contained" color={"primary"} disableElevation>
                                    {order.status}
</Button>
                                    </TableCell>
                                    {order.status!==initialStatus.DONE?(<TableCell>
<Button variant="contained" color="primary"  onClick={()=>{

    handlePizzaEditID(order.id-1)


}}>
Edit
</Button>
</TableCell>):(<span>{""}</span>)}


                                   

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default StudentsAttendanceTable;
