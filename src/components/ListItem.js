import React, { PureComponent } from 'react'

class ListItem extends PureComponent {
  render() {
    return(
      <li>{props.value}</li>
    )
  }
}

export default ListItem
