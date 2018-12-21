import * as React from 'react';
import {ITodo} from "../Store/types";

export interface Props {
    todos: ITodo[];
    addTodo: (text:string, id:number) => any;
    deleteTodo: (e:any, id:number) => any;
}

export default class Todo extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }

    renderTodo(todo: ITodo[], deleteTodo: (e:any, id:number) => any): JSX.Element[] {
        return todo.map((each: ITodo) => {
            return <div>{each.text} <button className={`${each.id}`} onClick={(e:any) => deleteTodo(e, each.id)}>delete</button>
            </div>
        })
    }

    render() {
        const { todos, addTodo, deleteTodo} = this.props;

        console.log(todos)
        return (
            <div className="todo-container">
                <div className="todo-header">

                </div>
                <div className="todo-body">
                    {this.renderTodo(todos, deleteTodo)}
                </div>
                <div className="todo-footer">
                    <button onClick={() => {addTodo("mustafa", Math.random()); console.log("co")}}>ADD</button>

                </div>
            </div>
        );
    }
}
