import React from 'react'
import Filters from '../containers/Filters'
import Candle from '../components/Candle'
import {Route, Switch, withRouter} from 'react-router-dom'
import CandleDetail from '../components/CandleDetail'


const CandlesContainer = props => {
  



  return (
    <div>
    <Switch>
      <Route path='/candles/:id' render={(routerProps) => {
          let candle;
          if (props.candles.length > 0) {
            let id = parseInt(routerProps.match.params.id)
            candle = props.candles.find(item => item.id === id)
            console.log(candle)
          } 
          return (
            <div>
              {candle ? <CandleDetail currentUser={props.currentUser} candle={candle} clickHandler={props.clickHandler} /> : <h1>Loading</h1>}
            </div>
          )
        }}
      />
    
    <Route path="/candles" render={() => {
      return (
        <div >
          {/* {renderCandles()} */}
          <Filters candles={props.candles}/>
        </div> 
      )
    }}
    />

  </Switch>
</div> 
)

}

export default withRouter(CandlesContainer)