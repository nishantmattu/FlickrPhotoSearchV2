import { FETCH_PHOTOS } from "../actions/index";

export default function(state = [], action) {
  //storing state data in array..

  switch (action.type) {
    case FETCH_PHOTOS:
      //console.log(state);
      return [action.payload.data];
    // return [action.payload.data, ...state]; //es6
    //return state.concat([action.payload.data]);
    //new arr, action data inside it and take other var
    //which might be array because... and insert into array
    //console.log(action.type);
  }
  return state;
}
