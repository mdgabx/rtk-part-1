import { useState } from 'react'
import './App.css'
import store from './app/store'
// import { cakeActions } from './features/cake/cakeSlice'
// import { icecreamActions } from './features/icecream/icecreamSlice'
import { fetchUsers } from './features/user/userSlice'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

function App() {

  console.log('Initial State', store.getState)
  const unsubscribe = store.subscribe(() => {
    store.getState()
  })

  // store.dispatch(ordered())
  // store.dispatch(ordered())
  // store.dispatch(ordered())
  // store.dispatch(restocked(3))

  // store.dispatch(cakeActions.ordered())
  // store.dispatch(icecreamActions.ordered())
  store.dispatch(fetchUsers())



  // unsubscribe()

  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  )
}

export default App
