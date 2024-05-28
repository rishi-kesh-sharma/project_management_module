import { useState } from "react";
import CalendarView from "./CalendarView";
import moment from "moment";
import { CALENDAR_INITIAL_EVENTS, ICalendarEvent } from "./dummyData";
import { getSuccessToast } from "@/utils/constants/toast";

const INITIAL_EVENTS: ICalendarEvent[] = CALENDAR_INITIAL_EVENTS;

function Calendar() {
  const [events, setEvents] = useState<ICalendarEvent[]>(INITIAL_EVENTS);

  const addNewEvent = (date: Date) => {
    const randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)];
    const newEventObj: ICalendarEvent = {
      title: randomEvent.title,
      theme: randomEvent.theme,
      startTime: moment(date).startOf("day"),
      endTime: moment(date).endOf("day"),
    };
    setEvents([...events, newEventObj]);
    getSuccessToast("Event added");
  };

  // Open all events of current day in sidebar

  return (
    <>
      <CalendarView calendarEvents={events} addNewEvent={addNewEvent} />
    </>
  );
}

export default Calendar;
