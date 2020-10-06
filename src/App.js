import React, { useEffect, useState } from 'react'

// * https://www.youtube.com/watch?v=9KJxaFHotqI
// * React Hooks - Полный Курс (Про Все Хуки!)
// * https://usehooks.com/
// * Easy to understand React Hook recipes 




// * Custom Hook
function useLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}

// * Custom Hook
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  // return {
  //   value,
  //   onChange,
  // }
  return {
    bind: { value, onChange },
    value,
    clear,
  }
}

function App() {
  // const [name, setName] = useState('')

  // const changeHandler = event => {
  //   setName(event.target.value)
  // }

  const input = useInput('')

  // * using Custom Hook
  //useLogger(name)
  useLogger(input.value)

  return (
    <div className="container mt-3">
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      {/* // * input have same param name so we can write just {...input} */}
      {/* <input type="text" {...input} /> */}
      <input type="text" {...input.bind} />
      <button className="btn btn-warning" onClick={() => input.clear()}>
        Clear
      </button>
      <hr />
      <h1>{input.value}</h1>
    </div>
  )
}

export default App
