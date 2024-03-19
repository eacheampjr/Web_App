import React from 'react';
import TimeSheet from './TimeSheet'; 

function TimeSheetList({ timeSheets, onDelete, onEdit }) {
    return (
        <table id="timesheets">
            <caption>Time Tracking</caption>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Time Spent (minutes)</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {timeSheets.map((timeSheet, i) => 
                    <TimeSheet 
                        timeSheet={timeSheet} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TimeSheetList;
