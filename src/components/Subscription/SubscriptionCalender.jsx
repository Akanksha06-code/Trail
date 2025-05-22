import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup date-fns localizer
const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});


const eventPropGetter = (event) => {
  let backgroundColor = "#2563eb"; // default blue
  if (event.type === "start") backgroundColor = "#22c55e"; // green for start
  if (event.type === "end") backgroundColor = "#ef4444";   // red for end
  return {
    style: {
      backgroundColor,
      color: "#fff",
      borderRadius: "5px",
      border: "none",
    },
  };
};





const SubscriptionCalender = ({ subscriptions = [] }) => {
  // Prepare events for start and end dates
  const events = subscriptions.flatMap((sub) => {
    const eventsArr = [];
    if (sub.startdate) {
      eventsArr.push({
        title: sub.name,
        start: new Date(sub.startdate),
        end: new Date(sub.startdate),
        allDay: true,
        type: "start",
    
      });
    }
    if (sub.enddate) {
      eventsArr.push({
        title: `${sub.name} (End)`,
        start: new Date(sub.enddate),
        end: new Date(sub.enddate),
        allDay: true,
        type: "end",
      });
    }
    return eventsArr;
  });

  // Add state and handlers for month navigation
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const prevMonth = new Date(prev);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const nextMonth = new Date(prev);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
  };

  return (
    <>
    <div className="my-5 mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={handlePrevMonth}
          >
            &lt; Prev
          </button>
          <span className="font-semibold text-lg">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={handleNextMonth}
          >
            Next &gt;
          </button>
        </div>
    </div>
    <div style={{ height: 700, background: "#fff", borderRadius: 8, padding: 16 }}>
      <h2 style={{ marginBottom: 16 }} className="text-green-600 text-xl font-bold">Subscription Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={["month"]}
        popup
        date={currentDate}
        onNavigate={setCurrentDate}
        eventPropGetter={eventPropGetter}
      />
    </div>
    </>
  );
};

export default SubscriptionCalender;