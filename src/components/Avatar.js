import React from 'react'

import defaultAvatar from '../images/default-avatar-250x250.png'
import './Avatar.sass'

export default class Avatar extends React.PureComponent {
  render() {
    return (
      <div className="avatar-profile">
        <img className="image-round"
          src={defaultAvatar}
          alt={this.props.name}
        />
        <span className="name-center"><p>{this.props.name}</p></span>
      </div>
    )
  }
}
