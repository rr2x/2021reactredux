import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'


const IceCreamContainer =
  (props) => (
    <div>
      <h2>Number of icecream: {props._numOfIceCreams}</h2>
      <button onClick={props._buyIceCream}>Buy IceCream</button>
    </div>
  )

const mapStateToProps =
  state => ({ _numOfIceCreams: state.r_iceCream.numOfIceCreams })

const mapDispatchToProps =
  dispatch => ({ _buyIceCream: () => dispatch(buyIceCream()) })

export default
  connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
