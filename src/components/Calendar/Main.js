import React from "react";
import MyDatePicker from "./Calendar";
import SidebarCalendar from "./SidebarCalendar";

export default function Main() {
  return (
    <div className="flex flex-row">
      <SidebarCalendar />
      <MyDatePicker />
    </div>
  );
}
