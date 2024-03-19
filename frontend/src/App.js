// Import dependencies
import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Gallery from './components/GalleryPage';

// Import pages
import TimeSheetPage from './pages/TimeSheetPage';
import AddTimeSheetPageForm from './pages/AddTimeSheetPageForm';
import EditTimeSheetPageForm from './pages/EditTimeSheetPageForm';
import TopicsPage from './pages/TopicPage';
import HomePage from './pages/HomePage';

import './App.css';

function App() {
  // Updated state to hold a single timesheet object
  const [selectedTimesheet, setSelectedTimesheet] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/timesheets" element={<TimeSheetPage setSelectedTimesheet={setSelectedTimesheet} />} />
            <Route path="/create" element={<AddTimeSheetPageForm />} />
            <Route path="/update" element={<EditTimeSheetPageForm timesheetToEdit={selectedTimesheet} />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
