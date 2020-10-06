import React, { useState, useCallback } from 'react'
import ItemsList from './ItemsList'

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black',
  }

  // * like useMemo but return function not value
  // * function not changed on new render when state changed
  const gennerateItemsFromAPI = useCallback(
    itemNumber => {
      return new Array(count)
        .fill('')
        .map((_, i) => `Element ${i + itemNumber}`)
    },
    [count],
  )

  return (
    <div>
      <h1 style={styles}>Number of elements: {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount(prev => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored(prev => !prev)}
      >
        Change
      </button>

      <ItemsList getItems={gennerateItemsFromAPI} />
    </div>
  )
}

export default App
