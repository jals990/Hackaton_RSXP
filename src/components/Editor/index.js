import React from 'react';
import CodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

// const Prism = require('prismjs');
// const loadLanguages = require('prismjs/components/');
// loadLanguages(['javascript', 'css']);
 
const code = '';
 
class Editor extends React.Component {
  state = { code };

  //this.props.func
 
  render() {
    return (
      <CodeEditor
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          background: '#f7f7f7',
        }}
      />
    );
  }
}

export default Editor;