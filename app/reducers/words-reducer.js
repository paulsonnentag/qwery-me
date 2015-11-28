import _ from 'lodash';
import Immutable from 'immutable';
import {ADD_WORD, UPDATE_WORD} from '../actions';

export default function words (words = Immutable.Map(), action) {
  switch (action.type) {
    case ADD_WORD:
      return addWord(words, action);

    case UPDATE_WORD:
      return updateWord(words, action);
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

function updateWord (words, {word, id}) {
  if (!words.has(id)) {
    throw new Error(`Can't update word, id=${id} does not exist`);
  }

  return words.mergeDeepIn([id], word);
}