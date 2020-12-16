import React from 'react'
import {withRouter} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



import CreateReview from './CreateReview'

class CandleDetail extends React.Component {

  state={
    reviews: [],
    rating: "",
    review: ""
  }
  
  renderReviews = () => {

    return this.state.reviews.map(review => {
        return (
            <div className="review-tile">

            <ListItem >
                
                <ListItemText
                primary={`User: ${review.user.username}`}
                secondary={`Rating: ${review.rating}`} 
                >
                </ListItemText>
                
                <Divider variant="inset" component="li"/>
                <ListItemText className='review-text'
                primary={`${review.review.slice(0, 150)}...`}
                >
                </ListItemText>
            </ListItem> 
                </div>
          )
        })
  }

  addToCartHandler = () => {
    this.props.clickHandler(this.props.candle)
  }

  componentDidMount() {
      fetch(`https://whispering-taiga-58641.herokuapp.com/api/v1/candles/${this.props.candle.id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        reviews: data.reviews
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.rating !== this.state.rating) {
      fetch(`https://whispering-taiga-58641.herokuapp.com/api/v1/candles/${this.props.candle.id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        reviews: data.reviews
      }))
    }
  }

  getAggregateReview = () => {
      let ratings = this.state.reviews.map(review => review.rating).reduce((total, accumulator) => {
          return total + accumulator
      }, 0)

      let average = ratings / this.state.reviews.length
      return average.toFixed(1)
    }


  reviewChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitReview = e => {
    e.preventDefault()

    let reviewObj = {
      review: {
        user_id: this.props.currentUser.id,
        candle_id: this.props.candle.id,
        review: this.state.review,
        rating: this.state.rating
      }
    }

    fetch('https://whispering-taiga-58641.herokuapp.com/api/v1/reviews', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }, 
      body: JSON.stringify(reviewObj)
    })
      .then(resp => resp.json())
      .then(newReview => {
        
        this.setState({
          
          rating: "",
          review: ""
        })
      })
  }
  
  renderScents = () => {
    return this.props.candle.scents.map(scent => <span>{`${scent} `}</span>)
  }

  render() {
    return (
      <div style={{"margin-top": "5em"}}>
        <Grid container justify='flex-start' >
          <Grid item xs={3}>
            <h1>{this.props.candle.name}</h1>
            <img className='candle-img' alt='candle' src={this.props.candle.image}/>
          </Grid>

          <Grid item xs={9} spacing={5}>
          <div style={{"margin-top": "2em"}}>
            <p><strong>Bio: </strong> {this.props.candle.description}</p>
            <p><strong>Scent Profile: </strong>{this.renderScents()}</p>
            <p><strong>Price: </strong> $ {this.props.candle.price}</p>
            <p><strong>Left in Stock </strong>{this.props.candle.quantity}</p>
            <Button variant="contained" color="primary" onClick={this.addToCartHandler}>Add to Cart</Button>
          </div>
          </Grid>
        </Grid>
        
        <div id="reviews-list">

          <h4>Reviews</h4>
          <h4>Average Rating : {this.getAggregateReview() === 'NaN' ? 0 : this.getAggregateReview()}</h4>
          <List>
              {this.renderReviews()}
          </List>
        </div>
          <CreateReview changeHandler={this.reviewChangeHandler} submitHandler={this.submitReview} ratingValue={this.state.rating} reviewValue={this.state.review}/>
      </div>
    )
  }

}



export default withRouter(CandleDetail)