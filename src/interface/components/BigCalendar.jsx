import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./css/bigcalendar.css";

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: "Meeting",
    start: new Date(2024, 10, 29, 10, 0), // Nov 29, 2024, 10:00 AM
    end: new Date(2024, 10, 29, 12, 0), // Nov 29, 2024, 12:00 PM
    allDay: false,
  },
  {
    title: "Conference",
    start: new Date(2024, 10, 30, 9, 0), // Nov 30, 2024, 9:00 AM
    end: new Date(2024, 10, 30, 17, 0), // Nov 30, 2024, 5:00 PM
    allDay: false,
  },
];

const BigCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
export default BigCalendar;
