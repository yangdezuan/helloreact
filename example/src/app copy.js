/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactDemo from '../../components'
let items = [],
  len = 12
function Repeat(props) {
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i))
  }
  return <div>{items}</div>
}
function DeleteItem(index) {
  items = items.slice(index, -1)
  len--
  alert(len)
  console.log(items, 'item')
}
const App = () => {
  console.log(ReactDemo, 'ReactDemo')
  return (
    <div>
      <ReactDemo></ReactDemo>
      <Repeat numTimes={len}>
        {(index) => (
          <div key={index}>
            This is item {index} in the list{' '}
            <button
              onClick={() => {
                DeleteItem(index)
              }}
            >
              Delete
            </button>
          </div>
        )}
      </Repeat>
    </div>
  )
}
render(<App />, document.getElementById('root'))
