import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function TimeSheet({ timeSheet, onEdit, onDelete }) {
        // Use .slice(0, 10) to extract the YYYY-MM-DD part of the date string
        const displayDate = timeSheet.date.slice(0, 10);
    return (
        <tr>
            <td>{timeSheet.subject}</td>
            <td>{timeSheet.timeSpent}</td>
            <td>{displayDate}</td>
           
            <td><FaTrashAlt className="icon-large" onClick={() => onDelete(timeSheet._id)} /></td>
            <td><FaEdit className="icon-large" onClick={() => onEdit(timeSheet)} /></td>
        </tr>
    );
}

export default TimeSheet;
