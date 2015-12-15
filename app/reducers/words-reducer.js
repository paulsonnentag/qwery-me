import _ from 'lodash';
import Immutable from 'immutable';
import {ADD_WORD, SET_WORD_TOKEN} from '../actions';

export default function words (words = Immutable.Map(), action) {
  switch (action.type) {
    case ADD_WORD:
      return addWord(words, action);

    case SET_WORD_TOKEN:
      return setWordToken(words, action);
  }
  return words;
}

function addWord (words, {word}) {
  if (_.isUndefined(word.id)) {
    throw new Error(`Can't add word, word has no id`);
  }

  if (words.has(word.id)) {
    throw new Error(`Can't add word, id=${word.id} already exits!`);
  }

  return words.set(word.id, Immutable.Map(word));
}

function setWordToken (words, {token, id}) {
  if (!words.has(id)) {
    throw new Error(`Can't update word, id=${id} does not exist`);
  }



  return words.setIn([id, 'token'], token);
}