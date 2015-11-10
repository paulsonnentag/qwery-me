import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple';

var VAR_REGEX = /(\?|\$)[A-Za-z_][A-Za-z0-9\-_]*/;
var STRING_REGEX = /\"(\\.|[^\"])*\"/;
var PROPERTY_ID_REGEX = /:P[0-9]*/;
var ITEM_ID_REGEX = /:Q[0-9]*/;

CodeMirror.defineSimpleMode('qwery', {
  start: [
    {regex: STRING_REGEX, token: 'item', next: 'startEntityID', sol: true},
    {regex: VAR_REGEX, token: 'variable', next: 'property', sol: true}
  ],

  startEntityID: [
    {regex: ITEM_ID_REGEX, token: 'item-id', next: 'property'}
  ],

  property: [
    {regex: STRING_REGEX, token: 'property', next: 'propertyID'},
  ],

  propertyID: [
    {regex: PROPERTY_ID_REGEX, token: 'property-id', next: 'entity'}
  ],

  entity: [
    {regex: STRING_REGEX, token: 'item', next: 'entityID'},
    {regex: VAR_REGEX, token: 'variable', next: 'start'}
  ],

  entityID: [
    {regex: ITEM_ID_REGEX, token: 'item-id', next: 'start'}
  ],
});
