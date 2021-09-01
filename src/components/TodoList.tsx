import { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const TodoList: FC = () => {
	const { error, loading, todos, limit, page } = useTypedSelector(
		(state) => state.todo
	);
	const { fetchTodos, setTodoPage } = useActions();

	// plug
	const pages = [1, 2, 3, 4, 5];

	useEffect(() => {
		fetchTodos(page, limit);
	}, [page]);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>An error has occur</h1>;
	}

	return (
		<div>
			{todos.map((todo) => (
				<div>
					<input
						id={`todoId${todo.id}`}
						type="checkbox"
						checked={todo.completed}
						key={todo.id}
					/>
					{todo.id} {todo.title}
				</div>
			))}
			<div>
				{pages.map((p) => (
					<span
						onClick={() => setTodoPage(p)}
						style={{
							display: "inline-block",
							padding: 10,
							margin: 5,
							border: p === page ? "2px solid teal" : "1px solid black",
						}}
					>
						{p}
					</span>
				))}
			</div>
		</div>
	);
};
