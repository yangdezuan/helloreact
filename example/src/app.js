/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactDemo from '../../components'
function Repeat(props) {
  let items = []
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i))
  }
  return <div>{items}</div>
}
const App = () => {
  console.log(ReactDemo, 'ReactDemo')
  return (
    <div>
      <ReactDemo></ReactDemo>
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    </div>
  )
}
render(<App />, document.getElementById('root'))
