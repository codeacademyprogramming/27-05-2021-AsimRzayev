import {
    Box,
    Button,
    CircularProgress,
    Typography,
    FormControl,
    InputLabel,
    Input,
    Select,
    MenuItem,
  makeStyles,TextField,TextareaAutosize
} from "@material-ui/core";
import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ASYNC_STATUS } from "../../../redux/consts";
import { addOrder } from '../actions';
import OrderTable from "./OrderTable";
import OrderForm from "./OrderForm";



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
      maxWidth: 300,
    },
    noLabel: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const initialStatus = {
    CREATED:"CREATED",
    IN_PROGRESS:"IN_PROGRESS",
    DONE:"DONE"
};
 
function OrderPage() {
    const dispatch = useDispatch();
    const Pizza = useSelector((state) => state.pizza);
    const pizzaBranch = useSelector((state) => state.pizza);
    const ordersBranch = useSelector((state) => state.orders);
    const classes = useStyles();
    const [showDateDialog, setShowDateDialog] = React.useState(false);
    const handleDialogClose = evt => {
        setShowDateDialog(false);
    }

    const handleDateEdit = () => {

        setShowDateDialog(true);
    }

   
    const [pizzaname, setPizzaname] = useState("")
    const [pizzaCount, setPizzaCount] = useState(1)
    const [pizzaAddition, setPizzaAddition] = useState("")
    const [EditItem, setEditItem] = useState(0)
    const handlePizzaChange =  React.useCallback((event) => {
        setPizzaname(event.target.value);
      },[]);
      const handlePizzaEditID =  React.useCallback((pizzaId) => {
        setShowDateDialog(true);
        setEditItem(ordersBranch.data.find(x=>x.id===pizzaId+1))
      

      },[ordersBranch]);
      const handlePizzaCountChange =  React.useCallback((event) => {
        setPizzaCount(event.target.value);
      },[]);
      const handlePizzaAdditionChange =  React.useCallback((event) => {
        setPizzaAddition(event.target.value);
      },[]);
      const handleSave = React.useCallback(() => {
     let dataId=ordersBranch.data.length
            const addPayload = {

                id:dataId+1,
                pizzaName:pizzaname,
                pizzaCount:Number(pizzaCount),
                pizzaAddition:pizzaAddition,
                status:initialStatus.CREATED

            }
            const dispatchAddOrder = addOrder(dispatch);
            dispatchAddOrder(addPayload);


    }, [dispatch,pizzaAddition,pizzaCount,pizzaname,ordersBranch.data]);

    return (
        <Box width="1024px" margin="0 auto" paddingTop={4}>
            <Typography variant="h4">Pizza Orders</Typography>
            {pizzaBranch.status === ASYNC_STATUS.LOADING ? (
                <Box
                    height="20vh"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <CircularProgress />
                </Box>
            ) : (
                <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Pizza Type</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"

          value={pizzaname}
          onChange={handlePizzaChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {Pizza.data.map(({name}) => (
            <MenuItem key={name} value={name} >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
 
        <TextField
          id="outlined-number"
          label="Count"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={pizzaCount}
          onChange={handlePizzaCountChange}
          variant="outlined"
        />
      </FormControl>
  
  
      <TextareaAutosize style={{marginTop:20}} aria-label="minimum height" value={pizzaAddition} onChange={handlePizzaAdditionChange} rowsMin={3} placeholder="Minimum 3 rows" />
    </div>
            )}

<Button variant="contained" color="secondary" onClick={handleSave}>
Add Order
</Button>

<OrderTable 
handlePizzaEditID={handlePizzaEditID}
handleDateEdit={handleDateEdit}
orders={ordersBranch.data}
/>

<OrderForm

   open={showDateDialog}
   EditItem={EditItem}
   onClose={handleDialogClose}
orders={ordersBranch.data}
/>
        </Box>
    );
}

export default OrderPage;
