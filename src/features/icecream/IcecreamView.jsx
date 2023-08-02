import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { icecreamActions } from './icecreamSlice'

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Ice cream - { numOfIcecreams }</h2>
        <button onClick={() => dispatch(icecreamActions.ordered())}>Order Ice cream</button>
        <button onClick={() => dispatch(icecreamActions.restocked(1))}>Restock Ice cream</button>
    </div>
  )
}

export default IcecreamView