"use client";

import React, { useState } from "react";
import { format, startOfWeek, endOfWeek, addDays, isSameMonth, parse, addMonths, subMonths, startOfMonth, endOfMonth, isSameDay } from 'date-fns';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { border } from "@chakra-ui/react";

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="flex justify-between items-center py-2">
                <div className="cursor-pointer" onClick={prevMonth}>
                    <MdKeyboardArrowLeft className="text-xl" />
                </div>
                <div className="">
                    <span>{format(currentMonth, dateFormat)}</span>
                </div>
                <div className="cursor-pointer" onClick={nextMonth}>
                    <MdKeyboardArrowRight className="text-xl" />
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const dateFormat = "eee";
        const days = [];

        let startDate = startOfWeek(currentMonth);

        console.log(startDate)

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="flex items-center gap-2 py-1">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`border-r ${!isSameMonth(day, monthStart)
                            ? "disabled"
                            : isSameDay(day, selectedDate) ? "bg-primary_color text-white" : ""
                            }`}
                        key={day}
                        onClick={() => onDateClick(parse(cloneDay))}
                    >
                        <span className="">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="flex items-center gap-4 w-full border-b" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="mt-2">{rows}</div>;
    };

    const onDateClick = (day) => {
        setSelectedDate(day);
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default Calendar;
