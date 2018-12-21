import * as actions from "../Store/actions";
import {TodoStoreState} from "../Store/types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Todo from "../components/Todo";

export function mapStateToProps({todos}: TodoStoreState) {
    return {
        todos
    }
}


export function mapDispatchToProps(dispatch: Dispatch<actions.TodoActions>) {
    return {
        deleteTodo: (e: any, id:number) => dispatch(actions.deleteTodo(e, id)),
        addTodo: (text: string, id:number) => dispatch(actions.addTodo(text, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
