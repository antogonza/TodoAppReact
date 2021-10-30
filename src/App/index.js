import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext'

// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: false },
// 	{ text: 'Tomar el curso de intro a React', completed: true },
// 	{ text: 'Llorar con la llorona', completed: false },
// 	{ text: 'LALALALALL', completed: false },
// 	{ text: 'OLA K ASE', completed: true }
// ];



function App() {
	
	return (
		<TodoProvider>
			<AppUi />
		</TodoProvider>
	);
}

export default App;
