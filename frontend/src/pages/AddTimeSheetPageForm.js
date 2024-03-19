import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const AddTimeSheetPageForm = () => {
    const [date, setDate]                 = useState('');
    const [timeSpent, setTimeSpent]       = useState('');
    const [subject, setSubject]           = useState('');

    const redirect = useNavigate();

    const addTimeSheet = async () => {

        const newTimeSheet = { date, timeSpent, subject };
        const response = await fetch('/timesheets', {
            method: 'post',
            body: JSON.stringify(newTimeSheet),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added a new entry`);
            redirect("/timesheets");
        } else {
            alert(`Failed to add the timesheet due to an error = ${response.status}`);
            redirect("/timesheets");
        }
    };

    return (
        <>
            <article>
                <h2>Add a TimeSheet Entry</h2>
                <p>Add to TimeSheet log entry.</p>
                <form onSubmit={(e) => { e.preventDefault();}}>
                    <fieldset>
                        <legend>New Timesheet Entry Details</legend>
                        
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            placeholder="Subject of the timesheet entry"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            id="subject" />
                        
                        <label htmlFor="timeSpent">Time Spent (hours)</label>
                        <input
                            type="number"
                            value={timeSpent}
                            placeholder="Time spent on the task"
                            onChange={e => setTimeSpent(e.target.value)}
                            id="timeSpent" />

                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="date" />

                        <label for="submit">
                        <button
                            type="submit"
                            onClick={addTimeSheet}
                            id="submit"
                         >Add</button> to the collection</label>
                    </fieldset>
                </form>
            </article>
        </>
    );
};

export default AddTimeSheetPageForm;

