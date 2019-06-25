import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: #000;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gold;
  border-radius: 3px;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #000;
  background: transparent;
  border: 2px solid gold;
  border-radius: 3px;
`

const Form = ({ setGhUsername }) => {
  const [name, setName] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    setGhUsername(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <label htmlFor="username">Github UserName</label>
      <Input
        type="text"
        name="username"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Github Username"
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Form
