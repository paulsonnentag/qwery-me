export const SET_LINE = 'SET_LINE';

export function setLine (line, tokens) {
  return {type: SET_LINE, line, tokens};
}
