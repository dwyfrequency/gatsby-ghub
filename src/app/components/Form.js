import React, { useState } from 'react'

const Form = ({ setGhUsername }) => {
  const [name, setName] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    setGhUsername(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Github Username:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form
