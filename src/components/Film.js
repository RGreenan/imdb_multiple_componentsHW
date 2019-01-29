import React, {Component} from 'react';

class Film extends Component {
  render() {
    return (
      <>
      <p><a href={this.props.url}>
      Title: {this.props.name}</a></p>
      </>
    );
  }
}

export default Film;
