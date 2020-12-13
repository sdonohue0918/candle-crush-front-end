import React from 'react'
import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button'
import { Badge } from '@material-ui/core';

const NavBar = (props) => {

  const [propObject, setPropObject] = useState({
    currentUser: props.currentUser,
    isSignedIn: props.isSignedIn
  })

  
  
  
  useEffect(() => {
    setPropObject({
      currentUser: props.currentUser,
      isSignedIn: props.isSignedIn
    })
  }, [props.currentUser, props.isSignedIn])


  const filterNav = () => {
    if (propObject.isSignedIn) {
      if (propObject.currentUser.user_type === "basic") {
        return ( 
          <div id='navbar'>
            <NavLink to='/candles' >Products</NavLink>
            <NavLink to='/cart'>
              <Badge badgeContent={props.cartLength} color="secondary">
              <ShoppingCartIcon />
              </Badge>
            </NavLink>
            <NavLink to='/profile'>
              <AccountCircleIcon />
            </NavLink>
            <Button color='primary' onClick={props.logoutHandler}>Logout</Button>
          </div>
        ) 
      } else {
        return (
          <div id='navbar'>
            <NavLink to='/candles' >Products</NavLink>
             <NavLink to='/cart'>
                <Badge badgeContent={props.cartLength} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
            </NavLink>
            <NavLink to='/candles/create'>Create a Candle</NavLink> 
            <NavLink to='/profile'>
              <AccountCircleIcon />
            </NavLink>
            <Button color='primary' onClick={props.logoutHandler}>Logout</Button>
          </div>
        ) 
      }
    } else {
      return (
        <div id='navbar'>
          <NavLink to='/candles' >Products</NavLink>
          <NavLink to='/cart'>
            <Badge badgeContent={props.cartLength} color="secondary">
            <ShoppingCartIcon />
            </Badge>
          </NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <Button color='primary' onClick={props.logoutHandler}>Logout</Button>

        </div>
      ) 
    }
  }



  console.log(propObject)
    
  
  return (
      
      <div>
      
      {filterNav()}
      
      
      
      </div>
    )
}

export default NavBar