import React from 'react'
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'
import PurchaseCard from './PurchaseCard'


class Purchases extends React.Component {
    state = {
        purchases: []
    }

    
    componentDidMount() {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/api/v1/purchases', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json())
        .then(data => {
            this.setState({
                purchases: data
            })
        })
    }
    
    
    
    renderPurchases = () => {
        let sortedPurchases = this.state.purchases.sort((a, b) => a.id - b.id)
        return sortedPurchases.map(purchase => <PurchaseCard returnPurchase={this.props.returnPurchase} returnCandle={this.returnCandle} purchase={purchase} />)
     }
    
    
    
    
     returnCandle = (id) => {

          const token = localStorage.getItem('token')
          fetch(`http://localhost:3000/api/v1/purchases/${id}`, {
              method: "DELETE",
              headers: {
                  Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
            .then(data => {
                let updatedPurchases = this.state.purchases.filter(purchase => purchase.id !== data.id)
                this.setState({
                    purchases: updatedPurchases
                }, () => this.props.history.push('/candles'))
            })
            
        }
            
      
      
      
        render() {
          return (
            <>
              <Typography variant='h4' gutterBottom>Your Purchases</Typography>
              {this.renderPurchases()}
            </>
          )
      }
}

export default withRouter(Purchases)