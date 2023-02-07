import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' 
import './App.css';

function App() {
  return (
    <FullCalendar
      headerToolbar={{
        start: "today prev next",
        end: "dayGridMonth dayGridWeek dayGridDay",
      }}
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
    />
  );
}

export default App;
