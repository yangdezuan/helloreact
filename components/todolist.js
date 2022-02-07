import React, { Fragment, Component } from 'react'
// Fragment 占位符 消除最外层div
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
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {item}{' '}
                  <button onClick={this.handleItemDelete.bind(this, index)}>
                    Delete
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue || '空'],
      inputValue: '',
    })
  }
  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list,
    })
  }
}

export default Todolist
