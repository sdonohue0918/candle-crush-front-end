import React from 'react'
import TextField from '@material-ui/core/TextField';

const Search = (props) => {
  return (
    <TextField id="standard-basic" name="searchValue" label="Search" value={props.searchValue} onChange={props.searchHandler} onClick={props.candleReset}/>
    )
} 
  




  

export default Search