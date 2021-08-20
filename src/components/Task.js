import { FaTimes } from 'react-icons/fa'

const Task = ({task ,onDelete, onToggle}) => {
    return (
        // Display the task 
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
            </h3>
            <p>
                {/* Day Month Date Year -> Short text Format*/}
                {task.startDate.toString().substring(0, 16)}

                {/* Month/Date/Year -> Format */}
                {/* {task.startDate.toLocaleDateString()}  */}
            </p>
        </div>
    )
}

export default Task;