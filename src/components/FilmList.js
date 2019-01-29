import React, {Component, Fragment} from 'react';
import Film from './Film.js';

class FilmList extends Component{
  render() {
    const filmlist = this.props.filmlist.map((film, index) => {
      return(
        <Film key={index} name={film.name}
        url={film.url}>
        </Film>
      )
    });

    return (
      <Fragment>
      {filmlist}
      </Fragment>
    );
  }
}

export default FilmList;
