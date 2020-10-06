import React from 'react'
import Main from './Main'
import Alert from './alert/Alert'
import { AlertProvider } from './alert/AlertContext'

function App() {
  return (
    <AlertProvider value={alert}>
      <div className="container mt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App
