import React, { useState, useEffect, useRef } from 'react'

//let renderCount = 1

function App() {
  //const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')

  // not using re-render
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    console.log('render useEffect')

    // * inifinite render
    //setRenderCount(prev => prev + 1)

    // fix with global var
    //renderCount++

    //useRef
    renderCount.current++

    console.log(inputRef.current)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  // focus input
  const focus = () => inputRef.current.focus()

  console.log('render component')

  return (
    <div>
      <h1>Render Count: {renderCount.current}</h1>
      <h2>Previos Value: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success btn-sm" onClick={focus}>
        Focus
      </button>
    </div>
  )
}

export default App
