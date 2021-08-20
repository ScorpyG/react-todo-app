import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [reminder, setReminder] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please add your task!");
            return;
        }

        onAdd({text, startDate, reminder});

        // Clear the form
        setText('');
        setStartDate('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add your task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <DatePicker 
                    placeholderText = 'Pick the date'
                    selected={startDate}
                    onChange={date => setStartDate(date)}    
                />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
