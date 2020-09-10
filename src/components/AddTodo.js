import React, { useState } from 'react'

function AddTodo({ addTodo }) {

  const [value, setValue] = useState('')

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          value.length > 0 ? addTodo(value) : alert('Empty todo text!')
          setValue('')
        }}>
        <input
          onChange={event => {
            setValue(event.target.value)
          }}
          value={value}
        />
        <button type='submit'>Add todo</button>
        <button
          onClick={(event) => {
            event.preventDefault();
            localStorage.clear();
            window.location.reload()
          }}
        >Clear LocalStorage</button>
      </form>
    </>
  )
}

export default AddTodo