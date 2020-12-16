import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const CartItem = ({item, addToCart, removeFromCart}) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: 600
      
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      
    },
    content: {
      flex: '1 0 auto',
      
      
    },
    cover: {
      width: 200,
      marginRight: 200,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
   
  }));
  
  const classes = useStyles();
  const theme = useTheme();

  const addClickHandler = () => {
    addToCart(item )
  }

  const removeClickHandler = () => {
    removeFromCart(item)
  }

  return (
    
    

  <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={item.image}
          title="Candle Image"
        />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Total ${`${item.price * item.qty}`}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            <RemoveCircleIcon onClick={removeClickHandler}></RemoveCircleIcon>
          </IconButton>
         <CardContent>
           <Typography variant='h6'>
              Qty {item.qty}
           </Typography>
         </CardContent>
          <IconButton aria-label="next">
          <AddCircleIcon  onClick={addClickHandler}></AddCircleIcon>
          </IconButton>
        </div>
      </div>
    </Card>









    

    
          


        
         
        

          
          
          
         
          

          

         

  )
}

export default CartItem
