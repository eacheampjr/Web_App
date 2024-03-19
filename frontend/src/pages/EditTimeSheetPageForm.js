import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTimeSheetPageForm = ({timesheetToEdit}) => {

 
    const [date, setDate]           = useState(timesheetToEdit.date);
    const [timeSpent, setTimeSpent] = useState(timesheetToEdit.timeSpent);
    const [subject, setSubject]     = useState(timesheetToEdit.subject);
    
    const redirect = useNavigate();

    const editTimeSheet = async () => {
        const response = await fetch(`/timesheets/${timesheetToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                subject: subject, 
                timeSpent: timeSpent, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Timesheet updated successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update timesheet. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/timesheets");
    }

    return (
        <>
        <article>
            <h2>Edit Timesheet Entry</h2>
            <p>Edit the details of your timesheet entry.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Timesheet Entry Details</legend>
                    
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)} 
                        id="subject" />

                    <label htmlFor="timeSpent">Time Spent (minutes)</label>
                    <input
                        type="number"
                        value={timeSpent}
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
                        onClick={editTimeSheet}
                        id="submit"
                    >Save</button> updates to the collection</label>            
                </fieldset>
            </form>
        </article>
        </>
    );
}

export default EditTimeSheetPageForm;
