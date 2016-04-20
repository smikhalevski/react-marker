import 'classlist-polyfill';

import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';

import './index.less';
import {HighlightedText} from '../main/HighlightedText';

class Demo extends Component {

  render() {
    return (
      <div className="container">
        <h1><span className="light">React</span> Substring Highlighter <span className="light">0.0.1</span></h1>
        <div className="row">
          <div className="col-md-4">
            <HighlightedText value="FOOO"/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));
