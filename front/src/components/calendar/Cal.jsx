import React, { useState } from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import './Cal.css'

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Ekonomija",
        allDay: true,
        start: new Date(2023, 11, 3),
        end: new Date(2023, 11, 4)
    },
    {
        title: "Marketing",
        allDay: true,
        start: new Date(2023, 11, 4),
        end: new Date(2023, 11, 9)
    },
    {
        title: "Programiranje 1",
        allDay: true,
        start: new Date(2023, 11, 10),
        end: new Date(2023, 11, 10)
    }

]

function addEvents() {

}


export const Cal = () => {
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
    const [newEvent1, setNewEvent1] = useState({ title: "", start: "", end: "" })
    const [newEvent2, setNewEvent2] = useState({ title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className="cal-page">
            <div className="calendar">
                <Calendar
                    localizer={localizer}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, margin: "50px" }}
                />
            </div>
            <div className="cal-tekst">
                <h4>Choose subject</h4>
                <input type="text" placeholder="Add subject"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />

                <h4>Starting Date</h4>
                <DatePicker placeholderText="Start Date"
                    selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <h4>Ending Date</h4>
                <DatePicker placeholderText="End Date"
                    selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

                <button onClick={handleAddEvent}>Add Subject</button>
            </div>
        </div>

    )
}