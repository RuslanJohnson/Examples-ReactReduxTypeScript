import { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const UserList: FC = () => {
	const { error, users, loading } = useTypedSelector((state) => state.user);
	const { fetchUsers } = useActions();

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>An error has occur</h1>;
	}

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					{user.name} | {user.email} | {user.phone}
				</div>
			))}
		</div>
	);
};
