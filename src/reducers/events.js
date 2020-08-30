import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions";

//
//action = {
//  type:'CREATE_EVENT',
//  title:'aaaa',
//  body:'bbb'
//}
//

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      //三項演算子
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      //分割代入
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      //event.id：stateのfilterで回してる行のObjectのid
      //action.id；渡ってきたactionのid
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
