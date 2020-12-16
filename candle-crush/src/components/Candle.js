import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {NavLink} from 'react-router-dom'

const Candle = ({candle, clickHandler, unmountFilterContainer}) => {
  
  const useStyles = makeStyles({
    root: {
      width: 225,
      height: 350,
      margin: '1em'
    },
    media: {
      height: 140,
    },
    title: {
      
    }
  });

  const classes = useStyles()

  const addToCartHandler = () => {
    clickHandler(candle)
  }

  const renderScents = () => {
    return candle.scents.map((scent, index) => <span key={index}>{`${scent} `}</span>)
  }

  return(

    
    <Card className={classes.root} key={candle.id} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={candle.image}
          title={candle.name}
        />
        <CardContent>
          <Typography noWrap gutterBottom variant="h5" component="h2">
            {candle.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            { `$${candle.price}`}
          </Typography>
          <Typography noWrap variant="body2" color="textSecondary" component="p">
            Scents: {renderScents()}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Divider />
      <CardActions>
        <Button size="small" color="primary" onClick={addToCartHandler}>
          Add to Cart
        </Button>
        <NavLink className="candle-card" to={`/candles/${candle.id}`} >
          <Button size="small" color="primary" onClick={unmountFilterContainer}>
            Learn More
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  
  
  )
  
}

export default Candle