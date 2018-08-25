import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // WARNING: as with components, DO NOT mutate state directly. You must return
    // a copletely new state with whatever you want to change incorperated in.
    // Here, for example, state.push(new item) is bad form. state.concat(new thing)
    // or the es6 syntax below returns a new object, thus, returning a new state.
      return [ action.payload.data, ...state ];
      break;
    default:

  }

  return state;
}
