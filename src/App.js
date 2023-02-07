import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' 
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
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView="dayGridWeek"
      events={events}
      views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
      select={handleSelectSlot}
    />
  );
}

export default App;
