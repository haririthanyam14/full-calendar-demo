import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";

import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  function handleSelectSlot(slotInfo){
    alert(JSON.stringify(slotInfo))
  }
  return (
    <FullCalendar
      selectable
      headerToolbar={{
        start: "today prev next",
        end: "dayGridMonth dayGridWeek dayGridDay",
      }}
      plugins={[ timeGridPlugin, interactionPlugin ]}
      initialView="timeGridWeek"
      events={events}
      views={["timeGridWeek", "timeGridDay" ]}
      select={handleSelectSlot}
    />
  );
}

export default App;
