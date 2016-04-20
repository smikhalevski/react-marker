import React from 'react';
import {RangeHighlight} from './RangeHighlight';

const {string, number, bool, oneOfType, instanceOf} = React.PropTypes;

MatchHighlight.defaultProps = {
  count: 1,
  caseInsensitive: true
};

MatchHighlight.propTypes = {
  value: string.isRequired,
  lookup: oneOfType([instanceOf(RegExp), string]).isRequired,
  count: number,
  caseInsensitive: bool
};

export function MatchHighlight({value, lookup, count, caseInsensitive}) {
  let ranges = [];
  if (lookup instanceof RegExp) {
    for (let i = 0; i < value.length; ++i) {
      let match = value.substr(i).match(lookup);
      if (match) {
        ranges.push({offset: i + match.index, length: match[0].length});
        i = i + match.index + match[0].length;
      } else {
        break;
      }
    }
  } else {
    let i = 0;
    while (count-- > 0) {
      if (caseInsensitive) {
        i = value.toLowerCase().indexOf(lookup.toLowerCase(), i);
      } else {
        i = value.indexOf(lookup, i);
      }
      if (i < 0) {
        break;
      }
      let {length} = lookup;
      ranges.push({offset: i, length});
      i += length;
    }
  }
  return <RangeHighlight value={value} ranges={ranges}/>;
}
