import  {React, useState, useEffect } from 'react'; //
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import TimeSheetList from '../components/TimeSheetList';
// import { Link } from 'react-router-dom';

function TimeSheetPage({ setSelectedTimesheet }) { 
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [timeSheets, setTimeSheets] = useState([]);

    // RETRIEVE the entire list of timeSheets
    const loadTimeSheets = async () => {
        const response = await fetch('/timesheets');
        if (!response.ok) {
            console.error('Failed to fetch timeSheets');
            return;
        }
        const data = await response.json();
        setTimeSheets(data);
    };
    
    // UPDATE a single timeSheet
    const onEditTimeSheet = async (timeSheet) => {
        // Using setTimeSpent to store the current timesheet for editing
        setSelectedTimesheet(timeSheet);
        redirect("/update");
    };

    // DELETE a single timeSheet  
    const onDeleteTimeSheet = async (_id) => {
        const response = await fetch(`/timesheets/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            // Reload timeSheets after deletion
            loadTimeSheets();
        } else {
            console.error(`Failed to delete timeSheet with id = ${_id}, status code = ${response.status}`);
        }
    };

    // LOAD all the Timesheets
    useEffect(() => {
        loadTimeSheets();
    }, []);

    // DISPLAY the Timesheets
    const handleAddClick = () => {
        redirect('/create');
    };

    return (
        <>
            <h2>My TimeSheets</h2>
            <p>Here's a list of all my tracked time studying.</p>
            <button onClick={handleAddClick} className="add-timesheet-btn">
                <FaPlus className="icon-large" /> Add TimeSheet
            </button>
            <TimeSheetList 
                timeSheets={timeSheets} 
                onEdit={onEditTimeSheet} 
                onDelete={onDeleteTimeSheet} 
            />
        </>
    );
}

export default TimeSheetPage;