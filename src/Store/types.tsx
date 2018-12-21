export interface store {
    languageName: string;
    enthusiasmLevel: number;
    todos: ITodo[]
}
export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}

export interface ITodo {
    text: string,
    id: number
}

export interface TodoStoreState {
    todos: ITodo[],
}
