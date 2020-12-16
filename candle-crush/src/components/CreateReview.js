import React from 'react'
import Rating from '@material-ui/lab/Rating'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

const CreateReview = props => {

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
      marginLeft: theme.spacing(1),
    },
    
    
  }));
  
  const classes = useStyles()

  return (
    <div className={classes.layout} >

    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Leave your Review!
      </Typography>


    <form onSubmit={props.submitHandler}>
      

        <Grid container>
      <Grid item xs={12}>

      <TextField id="outlined-multiline-static"
        label="Leave Your Review Here"
        multiline
        rows={3}
        defaultValue="Default Value"
        variant="outlined"
        value={props.reviewValue}
        name="review"
        onChange={props.changeHandler}
        />
        </Grid>

        <Grid item xs={12}>

      <Rating
        label="Rate this Candle"
        value={props.ratingValue}
        name="rating"
        onChange={props.changeHandler}
        />
        </Grid>
      
      <Grid item xs={12}>

      <Button type="submit" variant="contained" color="primary">Post Your Review</Button>    
      </Grid>
      
        </Grid>
    </form>
        </Paper>
    </div>
  )
}

export default CreateReview