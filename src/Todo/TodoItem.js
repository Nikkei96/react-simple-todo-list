import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid gray',
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '5px 0',
  },

  input: {
    margin: '0 10px 0 0'
  },
}

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          style={styles.input}
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1 + ') '}</strong>
        {todo.task}
      </span>

      <button className='rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem