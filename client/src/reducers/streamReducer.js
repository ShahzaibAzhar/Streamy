import _ from "lodash";

import {
  EDIT_STREAM,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "../actions/types";

// const streamReducer = (state = [], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       state.map((stream) => {
//         if (stream.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return stream;
//         }
//       });

//     default:
//       return state;
//   }
// };

export default (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }; //imp

    case DELETE_STREAM:
      return _.omit(state, action.payload); //imp

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") }; //imp

    default:
      return state;
  }
};
