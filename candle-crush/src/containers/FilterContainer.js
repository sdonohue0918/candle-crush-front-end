import React from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const FilterContainer = props => {

  const useStyles = makeStyles((theme) => ({
    
    
    
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      height: 500,
      width: 200,
      
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },

    
   
    
    
  }));
  
  const classes = useStyles()
  
  const filterScentsFromCandles = () => {
    let mappedCandles = props.candles.map(candle => candle.scents)
    let newCandlesArray = mappedCandles.flat(1)
    return newCandlesArray.filter((v, i, a) => a.indexOf(v) === i).filter(el => el !== null)
    
}
    

  
  
  return (
    <div id="filters-container">
      <Paper className={classes.paper}>
        <Typography variant='h5' gutterBottom>
          Viewing Options
      </Typography>
      

      <Search id="search" candleReset={props.candleReset} searchHandler={props.searchHandler} searchValue={props.searchValue}/>
      <Filter id="filter" scents={filterScentsFromCandles()}  filterScent={props.filterScent} filterValue={props.filterValue} filterPrice={props.filterPrice}/>
      </Paper>
    </div>
    )
}

export default FilterContainer