import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple';

CodeMirror.defineSimpleMode('qwery', {
  start: [
    {regex: /(\?|\$)[A-Za-z_][A-Za-z0-9\-_]*/, token: 'keyword'}
  ]
});
