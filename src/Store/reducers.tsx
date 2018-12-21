import { storeActions } from './actions';
import { store } from "./types";
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, DELETETODO, ADDTODO} from './constants';


export function enthusiasm(state: store, action: storeActions): store {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            console.log("increment");
            return {...state, enthusiasmLevel:Math.max(1, state.enthusiasmLevel + 1)};
        case DECREMENT_ENTHUSIASM:
            console.log("decrement");
            return {...state, enthusiasmLevel:Math.max(1, state.enthusiasmLevel - 1)};
        case ADDTODO:
            console.log("HERE ?")
            return {...state, todos: [...state.todos, {text: action.payload.text, id: action.payload.id}]};
        case DELETETODO:
            const filteredTodo = state.todos.filter((each) => {
                if(each.id !== action.payload) {
                    return each
                }
                return
            })
            return {...state, todos: filteredTodo};
    }
    return state;
}
