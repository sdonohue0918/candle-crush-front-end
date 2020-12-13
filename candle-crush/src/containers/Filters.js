import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
//import Checkbox from '@material-ui/core/Checkbox'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Autocomplete from '@material-ui/lab/Autocomplete'

import Candle from '../components/Candle'

const style = theme => ({
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
})











class Filters extends Component {
    state = {
        searchValue: "",
        selectValue: "default",
        priceValue: "default"
    }

    // const renderCandles = () => {
  //   return props.candles.map(candle => <Candle key={candle.id} candle={candle} clickHandler={props.clickHandler} />)
  // }
    
    // setFilterRender = () => {
    //     if (this.props.candles > 0) {
    //         let withSearch =  this.props.candles.filter(candle => { return candle.name.includes(this.state.searchValue)})
    //         return withSearch.map(candle => <Candle key={candle.id} candle={candle} />)
    //     }
    // }

    filterRender = () => {
        return this.props.candles.map(candle => <Candle key={candle.id} candle={candle} clickHandler={this.props.clickHandler}/>)
    }
    
    render() {
        console.log(this.props)
        return (
        <div id='main-container'>
        <div id="filters-container">
             <Paper className={null}>
                <Typography variant='h5' gutterBottom>
                    Viewing Options
                </Typography>
      

      {/* <Search id="search" searchHandler={props.searchHandler} searchValue={props.searchValue}/>
      <Filter id="filter" scents={filterScentsFromCandles()}  filterScent={props.filterScent} filterValue={props.filterValue} filterPrice={props.filterPrice}/> */}
                <TextField id="standard-basic" name="searchValue" label="Search" value={this.state.searchValue} onChange={(evt) => {this.setState({searchValue: evt.target.value})}}/>
                


                <div id="scent-check">
      

            <Autocomplete
        
        //          name="filterScent"
        // // onChange={props.filterScent}
        
                 freeSolo
        // onClick={props.filterScent}
                 name="scentValue"
                id="tags-standard"
                options={this.props.scents}
                getOptionLabel={(option) => option}
                onChange={(evt) => { this.setState({selectValue: evt.target.value})}}
                // onInputChange = {props.filterScent}
                value={this.state.selectValue}
                renderInput={(params) => (
        
          <TextField

            {...params}
            // onClick={props.filterScent}
            variant="standard"
            label="Scent"
            placeholder="Scent Profile"
            />
          )}
          />
            
            
        
       
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <FormControl component="fieldset">
          <FormLabel component="legend">Filter by Price</FormLabel>
          
          <RadioGroup className="radio-button" aria-label="" name="priceValue" >
            <FormControlLabel onChange={(evt) => {this.setState({priceValue: evt.target.value})}} className="radio-button" checked={this.state.priceValue === "lowHigh"} value="lowHigh" control={<Radio />} label="Low to High" />
            <FormControlLabel onChange={(evt) => {this.setState({priceValue: evt.target.value})}} className="radio-button" checked={this.state.priceValue === "highLow"} value="highLow" control={<Radio />} label="High to Low" /> 
          </RadioGroup>
        </FormControl>
      
        </div>
                
        </Paper>
        
        
        <div id='candles-container'>

            {this.filterRender()}
        </div>
        
        
        
        
        
        
        
        </div>
        </div>

       




        )
    }

}

export default Filters