import React, { Fragment, Component } from 'react'
// Fragment 占位符 消除最外层div

function handleInputChange(e) {
  this.setState({
    inputValue: e.target.value,
  })
  console.log(this, 'this')
}
function handleBtnClick() {
  this.setState({
    list: [...this.state.list, this.state.inputValue],
    inputValue: '',
  })
}
function DeleteItem(index) {
  // console.log(this, 'this')
  const list = [...this.state.list]
  list.splice(index, 1)
  this.setState({
    list: list,
  })
  // this.forceUpdate()
  console.log(this.state.list, 'item')
}
class Todolist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={handleInputChange.bind(this)}
          />
          <button onClick={handleBtnClick.bind(this)}>提交</button>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {item || '空'}
                  <button onClick={DeleteItem.bind(this, index)}>Del</button>
                </li>
              )
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Todolist
