import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


const CakeContainer =
  (props) => (
    <div>
      <h2>Number of cakes: {props._numOfCakes}</h2>
      <button onClick={props._buyCake}>Buy Cake</button>
    </div>
  )

const mapStateToProps =
  state => ({ _numOfCakes: state.r_cake.numOfCakes })

const mapDispatchToProps =
  dispatch => ({ _buyCake: () => dispatch(buyCake()) })

export default
  connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
