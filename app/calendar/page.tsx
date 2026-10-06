"use client";

import Ribbon from "@/components/ui/Ribbon";
import { calendarEvents, months, shortDays } from "@/constants/calendar";
import { useState } from "react";

const Calendar = () => {
  const todayDate = new Date();
  const today = {
    year: todayDate.getFullYear(),
    month: todayDate.getMonth(),
    day: todayDate.getDate()
  };

  const [currentView, setCurrentView] = useState({
    year: today.year,
    month: today.month
  });

  const { year: selectedYear, month: selectedMonth } = currentView;
  const selectedMonthEvents = calendarEvents[selectedMonth] ?? {};
  const eventList = Object.entries(selectedMonthEvents).map(([day, title]) => ({
    day: Number(day),
    title
  }));

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();
  const totalCells = firstDayOfWeek + daysInMonth;
  const trailingCells = (7 - (totalCells % 7)) % 7;

  const handleGoToToday = () => setCurrentView({ year: today.year, month: today.month });
  const handlePrevMonth = () =>
    setCurrentView((prev) =>
      prev.month === 0 ? { year: prev.year - 1, month: 11 } : { ...prev, month: prev.month - 1 }
    );
  const handleNextMonth = () =>
    setCurrentView((prev) =>
      prev.month === 11 ? { year: prev.year + 1, month: 0 } : { ...prev, month: prev.month + 1 }
    );

  return (
    <>
      <Ribbon name="Calendar" showFontSize={false} />
      <div className="min-h-screen max-w-7xl mx-auto my-8 px-4 lg:px-0 transition-colors">
        <div className="bg-card text-card-foreground p-2 md:p-6 rounded-xl border border-border shadow-sm">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {months[selectedMonth]} {selectedYear}
            </h2>
            <div className="flex flex-wrap gap-2 items-center justify-between px-4 md:px-0">
              <button
                onClick={handlePrevMonth}
                aria-label="Previous month"
                className="px-3 py-1.5 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors font-semibold">
                ‹
              </button>
              <button
                onClick={handleNextMonth}
                aria-label="Next month"
                className="px-3 py-1.5 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors font-semibold">
                ›
              </button>
              <button
                onClick={handleGoToToday}
                className="px-3 py-1.5 border border-border rounded-lg bg-card hover:bg-muted/50 font-medium transition-colors">
                Today
              </button>
              <select
                value={selectedMonth}
                onChange={(e) => setCurrentView((prev) => ({ ...prev, month: Number(e.target.value) }))}
                className="px-3 py-1.5 border border-border rounded-lg bg-card text-card-foreground hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors cursor-pointer">
                {months.map((name, index) => (
                  <option key={name} value={index}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 text-sm font-semibold text-muted-foreground border-b border-border mb-2">
            {shortDays.map((day) => (
              <div key={day} className="text-center py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-border border border-border rounded-lg overflow-hidden text-sm">
            {/* Leading empty cells */}
            {Array.from({ length: firstDayOfWeek }).map((_, index) => (
              <div key={`pad-start-${index}`} className="min-h-[25px] md:min-h-[90px] p-2 bg-muted/30 cursor-default" />
            ))}

            {/* Month Days */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const dayNumber = index + 1;
              const isToday = selectedYear === today.year && selectedMonth === today.month && dayNumber === today.day;

              // Direct string lookup for event on this date
              const eventTitle = selectedMonthEvents[dayNumber];
              const hasEvent = Boolean(eventTitle);

              return (
                <div
                  key={dayNumber}
                  className={`min-h-[25px] md:min-h-[90px] p-2 flex flex-col justify-between relative cursor-pointer transition-colors ${
                    isToday
                      ? "bg-primary/15 border-2 border-primary font-bold text-primary"
                      : hasEvent
                        ? "bg-secondary/15 font-semibold text-secondary-foreground"
                        : "bg-card hover:bg-muted/40"
                  }`}>
                  <div className="self-start">{dayNumber}</div>

                  {/* Indicator dot */}
                  {hasEvent && (
                    <div className="absolute bottom-2 right-2 w-1 h-1 ring-1 md:w-2 md:h-2 bg-primary rounded-full md:ring-2 ring-card" />
                  )}
                </div>
              );
            })}

            {/* Trailing empty cells */}
            {Array.from({ length: trailingCells }).map((_, index) => (
              <div key={`pad-end-${index}`} className="min-h-[25px] md:min-h-[90px] p-2 bg-muted/30 cursor-default" />
            ))}
          </div>

          {/* Event List Section */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="text-lg font-semibold mb-3">Events & Days in {months[selectedMonth]}</h3>
            {eventList.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {eventList.map(({ day, title }) => (
                  <li
                    key={`${selectedMonth}-${day}`}
                    className="p-2.5 border border-border rounded-lg bg-secondary/10 text-card-foreground font-medium flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">
                      {day}
                    </span>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No special events listed for this month.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
