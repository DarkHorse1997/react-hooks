// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // Tell React to maintain a State by using the React.useState() hook
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    // Update state using function provided by useState hook
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  // Pass a initialName prop
  return <Greeting initialName="Tanmoy" />
}

export default App
