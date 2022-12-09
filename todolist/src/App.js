import React, { useState } from 'react';
import './App.css';
import { Task } from './Components/Task';
import AddTask from './Components/AddTask';



function App() {
	const [form, isFormVisible] = useState(false);
	const [MyTasks, setMyTask] = useState([]);
	const [MyTasksList, setMyTaskList] = useState(MyTasks);
	const current = new Date();
	const time = current.toLocaleTimeString("en-US");

	function showAddForm() {
		isFormVisible(!form);
	}

	const AddNewTask = event => {
		event.preventDefault();

		const [titleElement, descriptionElement, timeToDoElement, createdTimeElement] = event.target;

		const newList = [...MyTasksList];

		newList.push({
			title: titleElement.value,
			timeToDo: timeToDoElement.value,
			description: descriptionElement.value,
			createdTime: createdTimeElement.value
		});
		setMyTaskList(newList);

		setMyTask([...newList]);
		titleElement.value = '';
		descriptionElement.value = '';
		timeToDoElement.value = '';
		createdTimeElement.value = '';

	}


	function DeleteTask(taskname) {
		MyTasks.forEach(element => {
			if (element.title === taskname) {
				var index = MyTasks.indexOf(element);
				if (index !== -1) {
					MyTasks.splice(index, 1)
					setMyTaskList(MyTasks);
					setMyTask(MyTasks);
				}
			}
		});


	}


	return (
		<div className='wrapper'>

			{form ? <button className='btn-add' onClick={showAddForm}>Hide Form</button> : <button className='btn-add' onClick={showAddForm}>Add New Task</button>}

			{form ? <AddTask abc={(e) => { AddNewTask(e) }} time={time} /> : ''}
			<div className="App">
				{
					MyTasks.map(

						task => { return <Task key={task.title} title={task.title} description={task.description} createdTime={task.createdTime} timeToDo={task.timeToDo} del={() => DeleteTask(task.title)} up={DeleteTask} /> }
					)
				}

			</div>
		</div>
	);
}

export default App;
