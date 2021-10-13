import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1)

  return (
    <div>
      <h2>Number of cakes: {props._numOfCakes}</h2>
      <input
        type="text"
        onChange={e => setNumber(e.target.value)}
        value={number}
      />
      <button
        onClick={() => props._buyCake(number)}>
        Buy {number} Cake{(number > 1 ? 's' : '')}
      </button>
    </div>
  )
}

const mapStateToProps =
  state => ({ _numOfCakes: state.r_cake.numOfCakes })

const mapDispatchToProps =
  dispatch => ({ _buyCake: numberArg => dispatch(buyCake(numberArg)) })

export default
  connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
