import * as constants from "./constants";
import {ITodo} from "./types";

interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}



interface IAddTodo {
    type: constants.ADDTODO,
    payload: ITodo
}



interface IDeleteTodo {
    type: constants.DELETETODO,
    payload: number
}

export type TodoActions = IAddTodo | IDeleteTodo;

export function addTodo(text: string, id: number):IAddTodo {
    console.log("tola")
    return {
        type: constants.ADDTODO,
        payload: {text, id}
    }
}

export function deleteTodo(e:any, id: number):IDeleteTodo {
    console.log("coni", id)
    return {
        type: constants.DELETETODO,
        payload: id
    }
}

export type storeActions = EnthusiasmAction | TodoActions;
