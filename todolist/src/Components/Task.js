import './css/Task.css'
export function Task({ title, timeToDo, description, createdTime, del, up }) {

	return (
		<>
			<div className="single-task">
				<p className='createdTime'>Created: {createdTime}</p>
				<h2 className="title">{title}</h2>
				<p className='timeToDo'>Due at: {timeToDo}</p>
				<p className='description'>{description}</p>

				<div className='btns'>
					<p className='delete' onClick={del}>Delete</p>
					<p className='update' onClick={up}>Update</p>
				</div>
			</div>
		</>
	);

}