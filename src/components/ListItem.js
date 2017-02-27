import React, { PureComponent } from 'react'

class ListItem extends PureComponent {
  render() {
    return(
      <li onClick={this.props.onClick}>{this.props.name}</li>
    )
  }
}

export default ListItem
