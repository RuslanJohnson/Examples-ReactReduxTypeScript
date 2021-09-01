import axios from "axios";
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import { UserAction, UserActionType } from "../types/user";

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionType.FETCH_USERS });
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users?_limit=5"
			);
			setTimeout(() => {
				dispatch({
					type: UserActionType.FETCH_USERS_SUCCESS,
					payload: response.data,
				});
			}, 500);
		} catch (error) {
			dispatch({
				type: UserActionType.FETCH_USERS_ERROR,
				payload: "Failed to fetch users from API",
			});
		}
	};
};
