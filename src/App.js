import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";

import './App.css';

function App() {
  const [events, setEvents] = useState([{title: 'From Calendar', start: '2023-02-08T12:30:00', end:'2023-02-08T12:45:00'}]);
  const [reservedSlots, setReservedSlots] = useState([]);
  const idTemplate = `id-`
  const [id, setId] = useState(0);

  function handleSelectSlot(slotInfo){
    const newEvent = {
      id: `idTemplate-${id}`,
      title: `${slotInfo.start} - ${slotInfo.end}`, 
      start: slotInfo.start, 
      end: slotInfo.end,
      color: 'blue'
    }
    setId((prevId) => (prevId + 1))
    setReservedSlots((prevEvents) => ([...prevEvents,{...slotInfo, id: `idTemplate-${id}`}]));
    setEvents((prevEvents) => ([...prevEvents, newEvent]))
  }

  function handleUnSelectSlot(slotInfo) {
    const chosenEvent = reservedSlots.findIndex(slot => slot.id === slotInfo.event.id)
    const selectedEvent = events.findIndex(slot => slot.id === slotInfo.event.id)
    chosenEvent !== -1 && setReservedSlots(reservedSlots.splice(chosenEvent, 1));
    selectedEvent !== -1 && setEvents(events.splice(selectedEvent, selectedEvent+1));
    if(reservedSlots.indexOf(slotInfo.event.id) > 0) alert('yes')
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
      eventClick={handleUnSelectSlot}
      eventColor='purple'
    />
  );
}

export default App;
