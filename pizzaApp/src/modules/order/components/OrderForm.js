import {
    Dialog,
    DialogContent,
    DialogTitle,
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    Button,
    Box,
} from "@material-ui/core";
import {
    FormControl,
    Input,
    Select,
    MenuItem,
    TextField,
    TextareaAutosize,
} from "@material-ui/core";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../actions";
const initialStatus = {
    CREATED: "CREATED",
    IN_PROGRESS: "IN_PROGRESS",
    DONE: "DONE",
};
function StudentAttendanceForm({ open, onClose, EditItem }) {
    const Pizza = useSelector((state) => state.pizza);
    const [pizzaname, setPizzaname] = useState("");
    const [pizzaCount, setPizzaCount] = useState("");
    const [pizzaAddition, setPizzaAddition] = useState("");
    const [pizzaStatus, setpizzaStatus] = useState(initialStatus.CREATED);
    const handlePizzaChange = React.useCallback((event) => {
        setPizzaname(event.target.value);
    }, []);

    const handlePizzaCountChange = React.useCallback((event) => {
        setPizzaCount(event.target.value);
    }, []);
    const handlePizzaAdditionChange = React.useCallback((event) => {
        setPizzaAddition(event.target.value);
    }, []);
    const handlePizzaStatusChange = React.useCallback((event) => {
        setpizzaStatus(event.target.value);
    }, []);

    const dispatch = useDispatch();

    const handleSave = React.useCallback(() => {
        const updatePayload = {
            id: EditItem.id,
            pizzaName: pizzaname !== "" ? pizzaname : EditItem.pizzaName,
            pizzaCount: pizzaCount !== "" ? pizzaCount : EditItem.pizzaCount,
            pizzaAddition:
                pizzaAddition !== "" ? pizzaAddition : EditItem.pizzaAddition,
            status: pizzaStatus !== "" ? pizzaStatus : EditItem.status,
        };
        const dispatchUpdateOrder = updateOrder(dispatch);
        dispatchUpdateOrder(updatePayload);
        onClose();
    }, [
        dispatch,
        pizzaname,
        pizzaCount,
        pizzaAddition,
        pizzaStatus,
        EditItem.pizzaCount,
        EditItem.pizzaName,
        EditItem.status,
        EditItem.pizzaAddition,
        EditItem.id,
        onClose,
    ]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth={"md"}>
            <DialogTitle>Order Edit Form</DialogTitle>
            <DialogContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ cursor: "pointer" }}>
                                Name
                            </TableCell>
                            <TableCell style={{ cursor: "pointer" }}>
                                Count
                            </TableCell>
                            <TableCell style={{ cursor: "pointer" }}>
                                Additional
                            </TableCell>
                            <TableCell style={{ cursor: "pointer" }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            <TableRow key={EditItem.id}>
                                <TableCell>
                                    {" "}
                                    <Select
                                        labelId="demo-mutiple-name-label"
                                        id="demo-mutiple-name"
                                        value={
                                            pizzaname === ""
                                                ? EditItem.pizzaName
                                                : pizzaname
                                        }
                                        onChange={handlePizzaChange}
                                        input={<Input />}
                                    >
                                        {Pizza.data.map(({ name }) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <FormControl>
                                        <TextField
                                            id="outlined-number"
                                            label="Count"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={
                                                pizzaCount === ""
                                                    ? EditItem.pizzaCount
                                                    : pizzaCount
                                            }
                                            onChange={handlePizzaCountChange}
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </TableCell>

                                <TableCell>
                                    <TextareaAutosize
                                        pt={2}
                                        aria-label="minimum height"
                                        value={
                                            pizzaAddition === ""
                                                ? EditItem.pizzaAddition
                                                : pizzaAddition
                                        }
                                        onChange={handlePizzaAdditionChange}
                                        rowsMin={3}
                                        placeholder="Minimum 3 rows"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Select
                                        labelId="demo-mutiple-name-label"
                                        id="demo-mutiple-name"
                                        value={
                                            pizzaStatus === ""
                                                ? EditItem.status
                                                : pizzaStatus
                                        }
                                        onChange={handlePizzaStatusChange}
                                        input={<Input />}
                                    >
                                        {Object.keys(initialStatus).map(
                                            (key) => (
                                                <MenuItem key={key} value={key}>
                                                    {key}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
                <Box marginTop={4}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default StudentAttendanceForm;
