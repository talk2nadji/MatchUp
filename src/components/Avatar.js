import React from 'react'

import defaultAvatar from '../images/default-avatar-250x250.png'

export default class Avatar extends React.PureComponent {
  render() {
    return (
      <img className="image-round"
        src={defaultAvatar}
        alt={this.props.name}
      />
    )
  }
}
