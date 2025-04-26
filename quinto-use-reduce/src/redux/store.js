import { legacy_createStore as createStore } from 'redux';
const initialState = [
  {
    id: 1,
    name: 'Explicar Tarea',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case '[TODO]: Add task':
      return [...state, action.payload];
    case '[TODO]: finish task':
      return state.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    case '[TODO]: Delete task':
      return state.filter((todo) => todo.id != action.payload);
    case '[TODO]: Delete All':
      return [];
    default:
      break;
  }
};

export const store = createStore(todoReducer);
