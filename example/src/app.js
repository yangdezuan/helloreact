/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactDemo from '../../components'
import Todolist from '../../components/todolist'
import Todolist1 from '../../components/todolist1'

const App = () => {
  console.log(ReactDemo, 'ReactDemo')
  return (
    <div>
      <ReactDemo></ReactDemo>
      <h2>Todo list 1</h2>
      <Todolist></Todolist>
      <h2>Todo list 2</h2>
      <Todolist1></Todolist1>
    </div>
  )
}
render(<App />, document.getElementById('root'))
