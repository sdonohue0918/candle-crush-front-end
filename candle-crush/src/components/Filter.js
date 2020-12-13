import React from 'react'
import Radio from '@material-ui/core/Radio';
//import Checkbox from '@material-ui/core/Checkbox'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'




const Filter = props => {

  

  return (
    <div id="scent-check">
      

      <Autocomplete
        
        // name="filterScent"
        // onChange={props.filterScent}
        
        freeSolo
        // onClick={props.filterScent}
        name="filterScent"
        id="tags-standard"
        options={props.scents}
        getOptionLabel={(option) => option}
        onChange={props.filterScent}
        onInputChange = {props.filterScent}
        value={props.filterScent}
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
          
          <RadioGroup className="radio-button" aria-label="" name="price" >
            <FormControlLabel onChange={props.filterPrice} className="radio-button" checked={props.filterValue === "lowHigh"} value="lowHigh" control={<Radio />} label="Low to High" />
            <FormControlLabel onChange={props.filterPrice} className="radio-button" checked={props.filterValue === "highLow"} value="highLow" control={<Radio />} label="High to Low" /> 
          </RadioGroup>
        </FormControl>
      
    </div>
    )
}

export default Filter
