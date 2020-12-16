import './App.css';
import Main from './containers/Main'
import React from 'react'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import {withRouter, Route} from 'react-router-dom'

class App extends React.Component {
  state = {
    currentUser: null,
    signIn: false,
    username: "",
    password: "",
    user_type: "basic",
    cartLength: 0
  }

  componentDidMount() {
    this.authorizeUser()
  }

  authorizeUser = () => {
  const token = localStorage.getItem('token')
  if(token) {
    fetch('https://whispering-taiga-58641.herokuapp.com/api/v1/users', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`}
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          currentUser: data.user,
          
        })
      })
    }
  }

  logoutHandler = () => {
    //console.log('loggin out...')
    localStorage.removeItem('token')
    this.setState({
      currentUser: null,
      signIn: false
    })
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  loginSubmit = (e) => {
    e.preventDefault()
    let userObj = {
      username: this.state.username,
      password: this.state.password
    }

    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(userObj)
    }
    fetch('https://whispering-taiga-58641.herokuapp.com/api/v1/login', config)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({
        username: "",
        password: "",
        user_type: "basic",
        currentUser: data.user,
        signIn: true
      }, () => {
        this.props.history.push('/candles')
      })
    })
  }

  signupSubmit = (e) => {
    e.preventDefault()

    let userObj = { 
      user: {
        username: this.state.username,
        password: this.state.password,
        user_type: this.state.user_type
      }
    }

    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(userObj)
    }

    fetch('https://whispering-taiga-58641.herokuapp.com/api/v1/users', config)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      localStorage.setItem("token", data.jwt)
      this.setState({
        username: "",
        password: "",
        user_type: data.user.user_type,
        currentUser: data.user,
        signIn: true
        
      }, () => {
        this.props.history.push('/candles')
      })
    })
  } 

  updateCartLength = (newLength) => {
    this.setState({
      cartLength: newLength
    })
  }
  
  render() {
    console.log(this.state)
    return (
      
      <div className="App">
            <NavBar isSignedIn={this.state.signIn} currentUser={this.state.currentUser} logoutHandler={this.logoutHandler} cartLength={this.state.cartLength}/>
            <Route exact path='/'>
              <Welcome />
            </Route>
            <Main 
              
              currentUser={this.state.currentUser} 
              loginSubmit={this.loginSubmit} 
              signupSubmit={this.signupSubmit} 
              inputHandler={this.inputChangeHandler} 
              username={this.state.username} 
              password={this.state.password} 
              user_type={this.state.user_type} 
              updateCartLength={this.updateCartLength}
            />
        </div>
    
  );
}
}

export default withRouter(App);
