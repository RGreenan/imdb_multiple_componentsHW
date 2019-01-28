import React, {Component} from 'react';

class Film extends Component {
  render() {
    return (
      <>
      <p>Title: {this.props.name}</p>
      <p>Url: {this.props.url}</p>

      </>
    );
  }
}

export default Film;
