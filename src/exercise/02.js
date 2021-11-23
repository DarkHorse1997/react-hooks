// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(initialState = '', key) {
  const [state, setState] = React.useState(() => {
    const stateFromLocalStorage = window.localStorage.getItem(key)
    if (stateFromLocalStorage) {
      return JSON.parse(stateFromLocalStorage)
    }
    return initialState
  })
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])
  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState(initialName, 'name')

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Tanmoy" />
}

export default App
