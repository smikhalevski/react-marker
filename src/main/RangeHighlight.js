import React from 'react';

const {func, number, string, arrayOf, shape} = React.PropTypes;

RangeHighlight.defaultProps = {
  ranges: [],
  count: 1,
  highlight: (value, offset) => <span key={offset} className="highlight">{value}</span>
};

RangeHighlight.propTypes = {
  value: string,
  ranges: arrayOf(shape({offset: number, length: number})),
  count: number,
  highlight: func
};

export function RangeHighlight({value, ranges, count, highlight}) {
  if (!value || !ranges.length || count <= 0) {
    return <span>{value}</span>;
  }
  let children = [],
      head = 0,
      tail = 0;
  for (let i = 0; i < value.length; ++i) {
    for (let {offset = 0, length = 0} of ranges) {
      if (offset < 0) {
        // Bring offsets to zero-based bounds.
        length += offset;
        offset = 0;
      }
      if (length <= 0) {
        continue; // Drop zero-wide ranges.
      }
      if (tail <= head) {
        if (i == offset) {
          tail = offset + length;
        }
      } else {
        if (offset >= i && offset <= tail && offset + length > tail) {
          tail = offset + length;
        }
      }
    }
    if (tail > head) {
      if (i > head) {
        children.push(value.substring(head, i));
      }
      children.push(highlight(value.substring(i, tail), i));
      head = tail;
      i = head - 1;
      if (--count <= 0) {
        break;
      }
    }
  }
  if (head < value.length) {
    children.push(value.substring(head));
  }
  return <span>{children}</span>;
}
