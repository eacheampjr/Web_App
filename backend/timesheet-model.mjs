// Models for the Timesheet Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Error 500 - Failed to connect to server.' });
    } else  {
        console.log('Success: Connection to MongoDB and Timesheet is successful.');
    }
});

// SCHEMA: Define the collection's schema.
const timeSheetSchema = mongoose.Schema({
    date: { type: Date, required: true, default: Date.now }, 
    timeSpent: { type: Number, required: true, default: 0 }, 
    subject: { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "timesheets".
const TimeSheet = mongoose.model('TimeSheet', timeSheetSchema);


// CREATE model *****************************************
const createTimeSheet = async (date, timeSpent, subject) => {
    const timeSheet = new TimeSheet({ 
        date, 
        timeSpent, 
        subject 
    });
    return timeSheet.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveTimeSheets = async () => {
    const query = TimeSheet.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTimeSheetByID = async (_id) => {
    const query = TimeSheet.findById({_id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTimeSheetById = async (_id) => {
    const result = await TimeSheet.deleteOne({_id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTimeSheet = async (_id, date, timeSpent, subject) => {
    const result = await TimeSheet.replaceOne({_id }, {
        date, 
        timeSpent, 
        subject 
    });
    return { 
        date, 
        timeSpent, 
        subject 
    }
}

// EXPORT the variables for use in the controller file.
export {createTimeSheet, retrieveTimeSheets, retrieveTimeSheetByID, updateTimeSheet, deleteTimeSheetById}