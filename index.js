import React, { Component } from "react";

import "./style.css";

import React, { Component } from "react";
import Avatar from "react-avatar";

export class FacePile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span className={`face-pile face-pile-circle-${this.props.users.splice(0, 2).length()}`}>
        {this.props.users.splice(0, 2).map(function(user, i) {
          return (
            <Avatar
              key={i}
              name={user.name}
              size={this.props.size}
              className="circle"
              round={true}
              src={user.avatar}
            />
          );
        })}
      </span>
    );
  }
}
