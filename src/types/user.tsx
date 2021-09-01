interface IUser {
	id: number;
	name: string;
	email: string;
	phone: string;
}
export interface UserState {
	users: IUser[];
	loading: boolean;
	error: string | null;
}

export enum UserActionType {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
	type: UserActionType.FETCH_USERS;
}
interface FetchUsersSuccessAction {
	type: UserActionType.FETCH_USERS_SUCCESS;
	payload: IUser[];
}
interface FetchUsersErrorAction {
	type: UserActionType.FETCH_USERS_ERROR;
	payload: string;
}

export type UserAction =
	| FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction;
