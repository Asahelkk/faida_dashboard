"use client";

import React, { useState } from "react";
import { format, startOfWeek, endOfWeek, addDays, isSameMonth, parse, addMonths, subMonths, startOfMonth, endOfMonth, isSameDay } from 'date-fns';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Calendar = ({ currentMonth, prevMonth, nextMonth, borderLeft, borderRight, borderRadiusRight }) => {
    // const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const renderHeader = () => {
        const dateFormat = "MMMM";

        return (
            <div className="flex justify-between items-center pb-3">
                <button className="cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={prevMonth}>
                    <MdKeyboardArrowLeft className="text-lg text-black" />
                </button>
                <div className="font-bold text-sm text-black">
                    <span>{format(currentMonth, dateFormat)}</span>
                </div>
                <button className="cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={nextMonth}>
                    <MdKeyboardArrowRight className="text-lg text-black" />
                </button>
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
                <div className="text-sm text-black" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="flex items-center justify-between">{days}</div>;
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
                        className={`py-1 px-2 ${!isSameMonth(day, monthStart)
                            ? "text-gray-200"
                            : isSameDay(day, selectedDate) ? "bg-primary_color text-white rounded-md" : ""
                            }`}
                        key={day}
                        onClick={() => onDateClick(parse(cloneDay))}
                    >
                        <span className="text-sm">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="flex items-center justify-between w-full" key={day}>
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

    // const nextMonth = () => {
    //     setCurrentMonth(addMonths(currentMonth, 1));
    // };

    // const prevMonth = () => {
    //     setCurrentMonth(subMonths(currentMonth, 1));
    // };

    return (
        <div className={`px-5 py-3 bg-white border-gray-200 ${borderLeft && `border-l`} ${borderRight && `border-r`} ${borderRadiusRight && `rounded-r-lg`}`}>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default Calendar;
