# React Substring Highlighter

[![npm version](https://badge.fury.io/js/react-substring-highlighter.svg)](https://www.npmjs.com/package/react-substring-highlighter)

```jsx
var MatchHighlighter = require('react-substring-highlighter').MatchHighlighter;

<MatchHighlighter value="Foo Bar" lookup={/foo/i}/>

<MatchHighlighter value="Foo Bar" lookup="foo" caseInsensitive={true} count={1}/>

var RangeHighlight = require('react-substring-highlighter').RangeHighlight;

<RangeHighlight value="Foo Bar" ranges={[{offset: 1, length: 1}, {offset: 3, length: 1}]}/>
```

[**Live Demo**](http://smikhalevski.github.io/react-substring-highlighter/)

## License

The code is available under [MIT licence](LICENSE.txt).
