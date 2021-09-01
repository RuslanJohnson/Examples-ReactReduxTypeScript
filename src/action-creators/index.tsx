import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";

export const ActionCreators = {
	...TodoActionCreators,
	...UserActionCreators,
};
