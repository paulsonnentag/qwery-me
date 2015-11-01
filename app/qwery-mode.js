import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple';

var VAR_REGEX = /(\?|\$)[A-Za-z_][A-Za-z0-9\-_]*/;
var STRING_REGEX = /\"(\\.|[^\"])*\"/;

CodeMirror.defineSimpleMode('qwery', {
  start: [
    {regex: STRING_REGEX, token: 'entity', next: 'property', sol: true},
    {regex: VAR_REGEX, token: 'variable', next: 'property', sol: true}
  ],

  property: [
    {regex: STRING_REGEX, token: 'property', next: 'entity'}
  ],

  entity: [
    {regex: STRING_REGEX, token: 'entity', next: 'start'},
    {regex: VAR_REGEX, token: 'variable', next: 'start'}
  ],
});
