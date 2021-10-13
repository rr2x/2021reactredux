import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
import { buyIceCream } from '../redux'

const ItemContainer = props => {
  return (
    <div>
      <h2>Item = {props._item}</h2>
      <button onClick={() => props._buyItem()}>Buy 1 {props.cake ? 'Cake' : 'Ice Cream'}</button>
    </div>
  )
}

// use this component's props to determine state to use from store
const mapStateToProps = (state, ownProps) => {
  const itemState =
    ownProps.cake ?
      state.r_cake.numOfCakes :
      state.r_iceCream.numOfIceCreams

  return {
    _item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction =
    ownProps.cake ?
      () => dispatch(buyCake()) :
      () => dispatch(buyIceCream())

  return {
    _buyItem: dispatchFunction
  }
}

// just pass null if you don't need to pass
// mapStateToProps but need to pass mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
