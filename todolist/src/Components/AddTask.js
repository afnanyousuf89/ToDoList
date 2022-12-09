import './css/AddTask.css'

function AddTask({ abc, time }) {

    return (

        <form onSubmit={abc} className="myform">
            <table>
                <tbody>
                    <tr>
                        <td><label>Title: </label></td>
                        <td><input type="text" name="title" required /></td>
                    </tr>
                    <tr>
                        <td><label>Description: </label></td>
                        <td><input type="text" id="description" required /></td>
                    </tr>
                    <tr>
                        <td><label>Reminder: </label></td>
                        <td><input type="time" id="timeToDo" /></td>
                    </tr>
                    <tr>
                        <td><input type="hidden" id="createdTime" value={time} /></td>
                        <td><button className='btn'>Save</button></td>
                    </tr>
                </tbody>
            </table>

        </form>
    );
}

export default AddTask;