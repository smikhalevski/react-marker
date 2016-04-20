import React, {Component} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';

import './index.less';
import {MatchHighlight} from '../main/MatchHighlight';

class Demo extends Component {

  state = {
    lookup: /Lorem|a/,
    count: 100
  };

  render() {
    return (
      <div className="container">
        <h1><span className="light">React</span> Substring Highlighter <span className="light">0.0.1</span></h1>
        <div className="row">
          <div className="col-md-4">
            Text to highlight
            <input className="form-control" value={this.state.lookup} onChange={e => this.setState({lookup: e.target.value})}/>

            Highlights count
            <input type="number" className="form-control" value={this.state.count} onChange={e => this.setState({count: e.target.value})}/>

            <MatchHighlight lookup={this.state.lookup} count={this.state.count} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('demo'));
