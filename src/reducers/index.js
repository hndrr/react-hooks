//
//action = {
//  type:'CREATE_EVENT',
//  title:'aaaa',
//  body:'bbb'
//}
//

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      return [...state, { id, title: action.title, body: action.body }];
    case "DELETE_EVENT":
      return state;
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
