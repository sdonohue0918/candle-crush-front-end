import React from 'react'
import CartItem from '../components/CartItem'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'



const Cart = ({cart, currentUser, addToCart, removeFromCart}) => {
  let history = useHistory()

  const useStyles = makeStyles((theme) => ({
    
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      
    },
  }));

  
  
  const classes = useStyles()

  
  
  let cartCopy = cart.map((item) => ({...item, qty: 0}))
    
  
  
  
  const updatedCart = cartCopy.map(item => {
    if(cartCopy.includes(item)) {
      let foundItem = cartCopy.find(el => el.id === item.id)
      foundItem.qty++
      return foundItem
    } else {
      return item
      
      
    }
  })



  const filteredCart = updatedCart.filter((a, b) => updatedCart.indexOf(a) === b)

  const renderCartItems = () => {
    return filteredCart.map((item, index) => <CartItem key={index} item={item} removeFromCart={removeFromCart} addToCart={addToCart} />)
  }
  

  
  const checkoutButton = () => {
    
    if (currentUser) {
        history.push('/checkout')
    } else {
      history.push('/login')
    }
  }

  return (
      <div className={classes.layout}>
        <Paper className={classes.paper}>


        
    <Grid container justify='center' spacing={12} alignContent='space-around'>

      


        <Typography variant='h3' gutterBottom>Your Cart</Typography>
  
          
       
      
      
    {renderCartItems()}
    
  <Grid item xs={12}>
  
  <Button className={classes.button} fullWidth variant="contained" color="primary" onClick={checkoutButton}>Go to Checkout</Button>
  </Grid>
  </Grid>
  </Paper>
      </div>
          
          )
        }

export default Cart
