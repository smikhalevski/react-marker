import React from 'react';
import {findDOMNode} from 'react-dom';

const {number, string, arrayOf} = React.PropTypes;

export class HighlightedText extends React.Component {

  static defaultProps = {
    ranges: []
  };
  static propTypes = {
    ranges: arrayOf(shape({offset: number, length: number})),
    value: string.isRequired
  };

  render() {}
}
