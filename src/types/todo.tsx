interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

export interface TodoState {
	todos: ITodo[];
	loading: boolean;
	error: string | null;
	page: number;
	limit: number;
}

export enum TodoActionType {
	FETCH_TODOS = "FETCH_TODOS",
	FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
	FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
	SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodos {
	type: TodoActionType.FETCH_TODOS;
}
interface FetchTodosSuccess {
	type: TodoActionType.FETCH_TODOS_SUCCESS;
	payload: ITodo[];
}
interface FetchTodosError {
	type: TodoActionType.FETCH_TODOS_ERROR;
	payload: string;
}
interface SetTodoPage {
	type: TodoActionType.SET_TODO_PAGE;
	payload: number;
}

export type TodoAction =
	| FetchTodos
	| FetchTodosSuccess
	| FetchTodosError
	| SetTodoPage;
