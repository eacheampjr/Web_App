// Controllers for the timesheet Collection

import 'dotenv/config';
import express from 'express';
import * as timeSheets from './timesheet-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/timesheets', (req,res) => { 
    timeSheets.createTimeSheet(
        req.body.date, 
        req.body.timeSpent, 
        req.body.subject
        )
        .then(timeSheet => {
            console.log(`"${timeSheet.time}" successfully added to the collection.`);
            res.status(201).json(timeSheet);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to add timesheet to collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/timesheets', (req, res) => {
    timeSheets.retrieveTimeSheets()
        .then(timeSheets => { 
            if (timeSheets !== null) {
                console.log(`All timesheets successfully retrieved from collection.`);
                res.json(timeSheets);
            } else {
                res.status(404).json({ Error: 'Requested timesheet from collection is not found on server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve timesheets from collection due to user/client error.' });
        });
});


// RETRIEVE by ID controller
app.get('/timesheets/:_id', (req, res) => {
    timeSheets.retrieveTimeSheetByID(req.params._id)
    .then(timeSheets => { 
        if (timeSheets !== null) {
            console.log(`Retrived "${timeSheets.timeSpent}", based on its ID.`);
            res.json(timeSheets);
        } else {
            res.status(404).json({ Error: 'Unable to retrieve resource due to user-error' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to find requested resource on server.' });
    });

});


// UPDATE controller ************************************
app.put('/timesheets/:_id', (req, res) => {
    timeSheets.updateTimeSheet(
        req.params._id, 
        req.body.date, 
        req.body.timeSpent, 
        req.body.subject
    )
    .then(timeSheets => {
        console.log(`"${timeSheets.time}" was successfully updated.`);
        res.json(timeSheets);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to update resource due to user error.' });
    });
});


// DELETE Controller ******************************
app.delete('/timesheets/:_id', (req, res) => {
    timeSheets.deleteTimeSheetById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`${deletedCount} deleted Timesheet based on ID input.`);
                res.status(200).send({ Success: 'Delete Timesheet successful.' });
            } else {
                res.status(404).json({ Error: 'Timesheet with the specified ID was not found. No deletion occurred.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: `Failed to delete timesheet. Reason: ${error.message || 'Unknown error'}.` });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});