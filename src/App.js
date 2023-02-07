import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";

import './App.css';

function App() {
  const [events, setEvents] = useState([{title: 'From Calendar', start: '2023-02-08T12:30:00', end:'2023-02-08T12:45:00'}]);
  const [reservedSlots, setReservedSlots] = useState([]);

  function handleSelectSlot(slotInfo){
    const newEvent = {
      title: `${slotInfo.start} - ${slotInfo.end}`, 
      start: slotInfo.start, 
      end: slotInfo.end
    }
    setReservedSlots((prevEvents) => ([...prevEvents, newEvent]));
    setEvents((prevEvents) => ([...prevEvents, newEvent]))
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
      slotLabelInterval={"01:00"}
      slotDuration={'00:30:00'}
      nowIndicator
    />
  );
}

export default App;
