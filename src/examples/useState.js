import React, { useState } from 'react'

function computeInitialCounter() {
  console.log('some calculations...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const counterState = useState(0)
  // console.log(counterState[0]) // state value
  // console.log(counterState[1]) // watcher function for re-render when state is changed

  //const [counter, setCounter] = useState(0)

  // * call twice computeInitialCounter every render when state changed
  //const [counter, setCounter] = useState(computeInitialCounter)
  // * call computeInitialCounter only one time
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })

  // * React Hook "useState" is called conditionally.
  // * React Hooks must be called in the exact same order in every component render
  // * react - hooks / rules - of - hooks
  // if (true) {
  //   const state = useState(42)
  // }

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  })

  function increment() {
    // * not work bacause counter value is same - need re-render
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // * use prevValue if you want setCounter twice
    setCounter(prevCounter => {
      return prevCounter + 1
    })
    setCounter(prev => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState(prev => {
      return { ...prev, title: 'New title' }
    })
  }

  console.log('render component')

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Add
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Remove
      </button>
      <button onClick={updateTitle} className="btn btn-secondary">
        Chnage title
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App
