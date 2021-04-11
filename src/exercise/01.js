// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Accept both newState as function or object
// const countReducer = (state, newState) => {
//   if (typeof newState === 'function') {
//     return newState(state)
//   }
//   return {...state, ...newState}
// }
// Declaration:   const [state, setState] = React.useReducer(countReducer, { count: initialCount })
// Using API: const increment = () => setState(currentState => ({count: currentState.count + step}))

const countReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.step
      }
    
    default:
      throw new Error(`Unsupported action type ${action.type}`)
  }
}


function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount})
  const { count } = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
