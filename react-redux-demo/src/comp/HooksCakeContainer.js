import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'


const HooksCakeContainer = () => {

  const numOfCakes = useSelector(state => state.r_cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer