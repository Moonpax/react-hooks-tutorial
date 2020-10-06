import React, { useState, useEffect } from 'react'

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  })

  // useEffect(() => {
  //   console.log('render useEffect')
  // })

  useEffect(() => {
    //console.log(`type changed: ${type}`)

    fetch(`https://jsonplaceholder.typicode.com/${type}/`)
      .then(response => response.json())
      .then(json => setData(json))

    // * cleanup
    return () => {
      console.log(`clean type: ${type}`)
    }
  }, [type])

  useEffect(() => {
    // * effect
    console.log(`ComponentDidMount`)

    window.addEventListener('mousemove', event => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      })
    })

    // * cleanup
    return () => {
      window.removeEventListener('mousemove')
    }
  }, [])

  //console.log('render component')

  return (
    <div>
      <h2>Resource: {type}</h2>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todo</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
